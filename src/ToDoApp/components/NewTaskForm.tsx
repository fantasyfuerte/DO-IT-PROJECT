import { DispatchType, ActionDispatch } from "@/types.d";
import { filters } from "../ToDoApp";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { motion } from "motion/react";
import { form } from "motion/react-client";

interface Props {
  dispatch: ({}: ActionDispatch) => void;
  filter: filters;
}

const NewTaskForm: React.FC<Props> = ({ dispatch, filter }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("content")?.toString();

    if (!title || title.length == 0 || title.trim() == "") return;
    dispatch({
      type: DispatchType.ADD,
      payload: { title, id: crypto.randomUUID() },
    });
    const input = e.currentTarget.elements.namedItem("content");
    if (input instanceof HTMLInputElement) input.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`transition duration-300 flex justify-center items-center w-full ${
        filter !== filters.ALL && "opacity-15"
      } `}
    >
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        type="text"
        placeholder="Five most important things for today"
        name="content"
        className="min-w-[300px] md:w-4/5 outline-none bg-transparent border-b-4 border-gray-300 text-center text-lg font-medium mb-2 shrink-0"
        disabled={filter !== filters.ALL ? true : false}
      />
      <motion.button
        className="inline-block md:hidden p-1 text-white bg-gray-900 rounded-full ml-1 mb-2"
        whileTap={{ scale: 1.15 }}
      >
        <PlusIcon />
      </motion.button>
    </form>
  );
};

export default NewTaskForm;
