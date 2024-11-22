import { ActionDispatch, DispatchType, ToDo } from "@/types.d";
import {
  RiCheckboxFill,
  RiCheckboxBlankLine,
  RiDeleteBack2Fill,
} from "react-icons/ri";
import { Reorder } from "motion/react";

interface Props {
  todo: ToDo;
  dispatch: ({}: ActionDispatch) => void;
  i: number;
}

const ToDoCard: React.FC<Props> = ({ todo, dispatch, i }) => {
  const delay = (i + 1.5) / 10;

  const HandleClick = () => {
    dispatch({ type: DispatchType.COMPLETE, payload: { id: todo.id } });
  };

  return (
    <Reorder.Item
      value={todo}
      key={todo.id}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay }}
      className={`flex items-center gap-3 bg-gray-950 w-full justify-between px-3 py-1 rounded-lg md:rounded-sm my-1 cursor-pointer ${
        todo.completed && "opacity-50 decoration-line"
      }`}
      onClick={HandleClick}
    >
      {todo.completed ? (
        <RiCheckboxFill size={20} color="#fff" className="hidden md:inline" />
      ) : (
        <RiCheckboxBlankLine
          size={20}
          color="#fff"
          className="hover:scale-110 transition-transform hidden md:inline"
        />
      )}
      <p className="text-lg text-white font-semibold">{todo.title}</p>
      <RiDeleteBack2Fill
        size={20}
        color="#fff"
        className="hover:scale-110 hover:opacity-70 transition-all active:opacity-100"
        onClick={() =>
          dispatch({ type: DispatchType.DELETE, payload: { id: todo.id } })
        }
      />
    </Reorder.Item>
  );
};

export default ToDoCard;
