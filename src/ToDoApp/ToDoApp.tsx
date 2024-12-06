import { DispatchType, type ToDo } from "@/types.d";
import { useEffect, useReducer, useRef, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import NewTaskForm from "./components/NewTaskForm";
import { getData, saveData } from "@/services";
import { reduce } from "@/services";
import { motion, Reorder } from "motion/react";
import FilterButtons from "./components/FilterButtons";
import { filters } from "@/types.d";

const initial = getData("data");

const initialState: ToDo[] = initial ?? [
  {
    title: "Write your task an make it check",
    id: "init-init-init-init",
    completed: false,
  },
];

const ToDoApp: React.FC = () => {
  const [toDoState, dispatch] = useReducer(reduce, initialState);
  const [filteredTodos, setFilteredTodos] = useState(toDoState);
  const [filter, setFilter] = useState(filters.ALL);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const actives = toDoState.filter((todo) => todo.completed == false);
    const completed = toDoState.filter((todo) => !actives.includes(todo));
    if (filter == filters.ACTIVE) setFilteredTodos(actives);
    else if (filter == filters.COMPLETED) setFilteredTodos(completed);
    else setFilteredTodos(toDoState);
  }, [filter, toDoState]);

  useEffect(() => {
    if (toDoState.length > 0) saveData("data", JSON.stringify(toDoState));
    else saveData("data", "");
  }, [toDoState]);

  return (
    <motion.section
      layout
      className="md:ml-20 p-2 rounded-md h-fit w-full md:basis-2/5"
    >
      {toDoState.length < 5 && (
        <NewTaskForm filter={filter} dispatch={dispatch} />
      )}
      <Reorder.Group
        ref={constraintsRef}
        axis="y"
        values={toDoState}
        onReorder={(value) => {
          dispatch({
            type: DispatchType.SET,
            payload: { todos: value, id: "a-a-a-a" },
          });
        }}
      >
        {filteredTodos.length == 0 && (
          <p className="text-center opacity-60 text-lg font-semibold">
            No tasks
          </p>
        )}
        {filteredTodos.map((todo, index) => (
          <ToDoCard
            constraints={constraintsRef}
            todo={todo}
            dispatch={dispatch}
            key={todo.id}
            i={index}
          />
        ))}
      </Reorder.Group>
      <FilterButtons setFilter={setFilter} toDoState={toDoState} />
    </motion.section>
  );
};

export default ToDoApp;
