import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "../contextAPI/hooks";
import { type Todo } from "../types/types";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center p-4 my-2 shad w-[600px] rounded justify-between">
            <CheckBox todo={todo} />
            <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
            </h1>
            <button
                className="flex justify-center items-center text-red-600"
                onClick={() => {
                    dispatch({
                        type: "REMOVE_TODO",
                        payload: todo.id
                    })
                }}
            >
                <VscTrash size={20} />
            </button>
        </div>
    )
}
