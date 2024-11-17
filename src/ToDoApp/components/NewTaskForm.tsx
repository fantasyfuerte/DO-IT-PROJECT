import { DispatchType, ActionDispatch } from "@/types.d";
import { filters } from "../ToDoApp";
import { useState } from "react";

interface Props {
  dispatch: ({}: ActionDispatch) => void;
  filter: filters;
}

const NewTaskForm: React.FC<Props> = ({ dispatch, filter }) => {
  const [title, setTitle] = useState("");

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || title.length == 0 || title.trim() == "") return;
    dispatch({
      type: DispatchType.ADD,
      payload: { title, id: crypto.randomUUID() },
    });
    setTitle("");
  };

  const handlePress = () => {
    dispatch({
      type: DispatchType.ADD,
      payload: { title, id: crypto.randomUUID() },
    });
    setTitle("");
  };

  return (
    <div
      className={`transition duration-300 flex justify-center items-center w-full ${
        filter !== filters.ALL && "opacity-15"
      } `}
    >
      <input
        type="text"
        placeholder="Five most important things for today"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleEnter}
        value={title}
        className="min-w-72 md:w-4/5 outline-none bg-transparent border-b-4 text-center text-lg font-medium mb-2"
        disabled={filter !== filters.ALL ? true : false}
      />
      <button
        className="inline-block md:hidden px-2 py-1 text-white bg-gray-900 rounded-md ml-4"
        onClick={handlePress}
      >
        Add
      </button>
    </div>
  );
};

export default NewTaskForm;