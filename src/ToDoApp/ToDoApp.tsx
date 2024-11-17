import { ActionDispatch, DispatchType, type ToDo } from "@/types.d";
import { useEffect, useReducer, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import NewTaskForm from "./components/NewTaskForm";

let initial;
const data = window.localStorage.getItem("data");
if (data) {
  initial = JSON.parse(data);
}

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
  function reduce(todos: ToDo[], action: ActionDispatch): ToDo[] {
    switch (action.type) {
      case DispatchType.ADD:
        if (!action.payload.title) return todos;
        return [
          ...todos,
          {
            title: action.payload.title,
            id: action.payload.id,
            completed: false,
          },
        ];
      case DispatchType.DELETE:
        return todos.filter((todo) => todo.id !== action.payload.id);
      case DispatchType.COMPLETE:
        return todos.map((todo) => {
          if (todo.id == action.payload.id)
            return { ...todo, completed: !todo.completed };
          return todo;
        });
    }
  }

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
    if (toDoState.length > 0)
      window.localStorage.setItem("data", JSON.stringify(toDoState));
    else window.localStorage.setItem("data", "");
  }, [toDoState]);

  return (
    <section className="md:ml-20 p-2  rounded-md h-fit md:basis-2/5">
      {toDoState.length < 5 && (
        <NewTaskForm filter={filter} dispatch={dispatch} />
      )}
      <ul className="">
        {filteredTodos.length == 0 && (
          <p className="text-center opacity-60 text-lg font-semibold">
            No tasks
          </p>
        )}
        {filteredTodos.map((todo) => (
          <ToDoCard todo={todo} dispatch={dispatch} key={todo.id} />
        ))}
      </ul>
      <div className="flex justify-around">
        <button
          className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1"
          onClick={() => {
            setFilter(filters.ALL);
          }}
        >
          All
        </button>
        <button
          className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1"
          onClick={() => {
            setFilter(filters.ACTIVE);
          }}
        >
          Active
        </button>
        {toDoState.filter((todo) => todo.completed).length > 0 && (
          <button
            className="rounded-md bg-gray-950 basis-1/3 text-white font-semibold mx-5 py-1"
            onClick={() => {
              setFilter(filters.COMPLETED);
            }}
          >
            Completed
          </button>
        )}
      </div>
    </section>
  );
};

export default ToDoApp;
