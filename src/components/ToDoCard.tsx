import { ActionDispatch, DispatchType, ToDo } from "@/types.d";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
  RiDeleteBack2Fill,
} from "react-icons/ri";

interface Props {
  todo: ToDo;
  dispatch: ({}: ActionDispatch) => void;
}

const ToDoCard: React.FC<Props> = ({ todo, dispatch }) => {
  return (
    <li
      key={todo.id}
      className={`flex items-center gap-3 bg-amber-900 w-full justify-between px-3 py-1 rounded-md my-2 cursor-pointer ${todo.completed&& "opacity-50 decoration-line"}`}
      onClick={()=>dispatch({type:DispatchType.COMPLETE,payload:{id:todo.id}})}
    >
      {todo.completed ? (
        <RiCheckboxCircleFill size={20} color="#fff" />
      ) : (
        <RiCheckboxBlankCircleLine size={20} color="#fff" className="hover:scale-110 transition-transform"/>
      )}
      <p className="text-lg text-white font-semibold">{todo.title}</p>
      <RiDeleteBack2Fill size={20} color="#fff" className="hover:scale-110 hover:opacity-70 transition-all active:opacity-100" onClick={()=>dispatch({type:DispatchType.DELETE,payload:{id:todo.id}})}/>
    </li>
  );
};

export default ToDoCard;
