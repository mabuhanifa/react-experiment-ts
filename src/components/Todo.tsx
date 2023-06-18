import { VscTrash } from "react-icons/vsc";
import { type Todo } from "../types/types";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
    return (
        <div className="flex items-center p-4 my-2 shad w-[600px] rounded justify-between">
            <CheckBox todo={todo} />
            <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
            </h1>
            <button className="flex justify-center items-center text-red-600"><VscTrash size={20} /></button>
        </div>
    )
}
