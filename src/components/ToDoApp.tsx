import { ActionDispatch, DispatchType, type ToDo } from "@/types.d";
import { useEffect, useReducer, useState } from "react";
import ToDoCard from "./ToDoCard";

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

  useEffect(() => {
    if (toDoState.length > 0)
      window.localStorage.setItem("data", JSON.stringify(toDoState));
    else window.localStorage.setItem("data", "");
  }, [toDoState]);

  return (
    <section className="w-full xl:w-1/3 md:w-1/2 md:ml-20 p-2  rounded-md mt-12 min-h-24 h-fit shrink-0">
      {toDoState.length < 5 && (
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Five most important things for today"
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleEnter}
            value={title}
            className="w-4/5 outline-none bg-transparent border-b-4 text-center text-lg font-medium mb-2"
          />
        </div>
      )}
      <ul className="">
        {toDoState.length == 0 && (
          <p className="text-center opacity-60 text-lg font-semibold">
            No tasks
          </p>
        )}
        {toDoState.map((todo) => (
          <ToDoCard todo={todo} dispatch={dispatch} key={todo.id}/>
        ))}
      </ul>
    </section>
  );
};

export default ToDoApp;
