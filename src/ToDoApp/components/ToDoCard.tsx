import { ActionDispatch, DispatchType, ToDo } from "@/types.d";
import {
  RiCheckboxFill,
  RiCheckboxBlankLine,
  RiDeleteBack2Fill,
} from "react-icons/ri";
import { Reorder } from "motion/react";
import { memo, useState } from "react";

interface Props {
  todo: ToDo;
  dispatch: ({}: ActionDispatch) => void;
  i: number;
  constraints: React.MutableRefObject<null>;
}

const ToDoCard: React.FC<Props> = memo(({ todo, dispatch, i, constraints }) => {
  const [isClickable, setIsClickable] = useState(true);
  const delay = (i + 1.5) / 10;

  const HandleClick = () => {
    if (!isClickable) return;
    dispatch({ type: DispatchType.COMPLETE, payload: { id: todo.id } });
  };

  return (
    <Reorder.Item
      dragConstraints={constraints}
      value={todo}
      key={todo.id}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay }}
      whileDrag={{
        scale: 1.1,
        boxShadow: "0 0 10px #fff",
        transition: { delay: 0 },
      }}
      onDrag={() => setIsClickable(false)}
      className={`flex items-center gap-3 bg-gray-950 w-full justify-between px-3 py-1 rounded-lg md:rounded-sm my-1 cursor-pointer ${
        todo.completed && "opacity-50 decoration-line"
      }`}
      onClick={HandleClick}
      onMouseUp={() => {
        setTimeout(() => setIsClickable(true), 100);
      }}
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
});

export default ToDoCard;
