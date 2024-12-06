import { motion } from "motion/react";
import { filters, ToDo } from "@/types.d";

interface Props {
  setFilter: (filter: filters) => void;
  toDoState: ToDo[];
}

export default function FilterButtons({ setFilter, toDoState }: Props) {
  return (
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
  );
}
