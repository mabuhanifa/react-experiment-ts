import { useState } from "react";
import { BiSave } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "../contextAPI/hooks";
import { type Todo } from "../types/types";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-12 p-4 my-2 shad w-[600px] rounded">
      <div className="col-span-2 flex justify-center items-center">
        <CheckBox todo={todo} />
      </div>
      <div className="col-span-6 flex items-center">
        <input
          type="text"
          value={todo.title}
          className={`text-2xl font-bold ${
            todo.isCompleted ? "line-through" : ""
          }  ${edit ? "bg-gray-500" : ""}`}
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_STATUS", payload: todo.id });
          }}
          className={`text-xs px-2 py-0.5 rounded-full text-white font-[500]    
                   ${todo.isCompleted ? "bg-green-500" : "bg-red-500"}`}
        >
          {todo.isCompleted ? "Completed" : "Pending"}
        </button>
      </div>
      <div className="col-span-2 flex items-center justify-center gap-x-5">
        <button onClick={() => setEdit((m) => !m)} className="text-green-600">
          {edit ? <BiSave size={22} /> : <FiEdit size={20} />}
        </button>
        <button
          className="flex justify-center items-center text-red-600 "
          onClick={() => {
            dispatch({
              type: "REMOVE_TODO",
              payload: todo.id,
            });
          }}
        >
          <VscTrash size={20} />
        </button>
      </div>
    </div>
  );
}
