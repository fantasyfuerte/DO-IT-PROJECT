import { type ToDo } from "@/types.d";
import { useEffect, useReducer, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import NewTaskForm from "./components/NewTaskForm";
import { getData, saveData } from "@/services";
import { reduce } from "@/services";
import { motion, Reorder } from "motion/react";

const initial = getData("data");

const initialState: ToDo[] = initial ?? [
  {
    title: "Write your task an make it check",
    id: "init-init-init-init",
    completed: false,
  },
];

export enum filters {
  ALL = "add",
  ACTIVE = "active",
  COMPLETED = "completed",
}

const ToDoApp: React.FC = () => {
  const [toDoState, dispatch] = useReducer(reduce, initialState);
  const [filteredTodos, setFilteredTodos] = useState(toDoState);
  const [filter, setFilter] = useState(filters.ALL);

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
      className="md:ml-20 p-2 rounded-md h-fit md:basis-2/5"
    >
      {toDoState.length < 5 && (
        <NewTaskForm filter={filter} dispatch={dispatch} />
      )}
      <Reorder.Group
        axis="y"
        values={filteredTodos}
        onReorder={setFilteredTodos}
      >
        {filteredTodos.length == 0 && (
          <p className="text-center opacity-60 text-lg font-semibold">
            No tasks
          </p>
        )}
        {filteredTodos.map((todo, index) => (
          <ToDoCard todo={todo} dispatch={dispatch} key={todo.id} i={index} />
        ))}
      </Reorder.Group>
      <motion.div className="flex justify-around">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1 px-2"
          onClick={() => {
            setFilter(filters.ALL);
          }}
        >
          All
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1 px-2"
          onClick={() => {
            setFilter(filters.ACTIVE);
          }}
        >
          Active
        </motion.button>
        {toDoState.filter((todo) => todo.completed).length > 0 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1 px-2"
            onClick={() => {
              setFilter(filters.COMPLETED);
            }}
          >
            Completed
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ToDoApp;
