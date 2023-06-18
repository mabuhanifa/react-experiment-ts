import { type Todo } from "../types/types";
import CheckBox from "./CheckBox";

export default function Todo({ todo }: { todo: Todo }) {
    return (
        <div className="flex items-center p-2">
            <CheckBox todo={todo} />
            <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
            </h1>
        </div>
    )
}
