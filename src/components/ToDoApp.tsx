import { ActionDispatch, DispatchType, type ToDo } from "@/types.d";
import { useReducer, useState } from "react";
import ToDoCard from "./ToDoCard";

const initialState: ToDo[] = [
  {
    title: "Write your task an make it check",
    id: "init-init-init-init",
    completed: false,
  },
];

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
    return todos;
  }

  const [toDoState, dispatch] = useReducer(reduce, initialState);
  const [title, setTitle] = useState("");

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || title.length == 0 || title.trim() == "") return;
    dispatch({
      type: DispatchType.ADD,
      payload: { title, id: crypto.randomUUID() },
    });
    setTitle("");
  };

  return (
    <>
      <section className="xl:w-1/3 md:w-1/2 m-3 p-2 shadow-md rounded-md shadow-amber-900 bg-white mt-10 min-h-24">
        {toDoState.length < 5 && (
          <div className="flex flex-col items-center w-full">
            <input
              type="text"
              placeholder="5 most important things for today"
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleEnter}
              value={title}
              className="w-4/5 outline-none border-b-4 text-center text-lg font-medium mb-2"
            />
          </div>
        )}
        <ul className="">
          {toDoState.map((todo) => (
            <ToDoCard todo={todo} dispatch={dispatch} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ToDoApp;
