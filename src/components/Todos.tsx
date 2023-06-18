import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "../contextAPI/hooks";
import Todo from "./Todo";

export default function Todos() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((s) => s.todos);
    const createTodo = (e: (FormEvent<HTMLFormElement | HTMLButtonElement>)) => {
        e.preventDefault();
        if (!title) return;
        dispatch({
            type: "ADD_TODO",
            payload: { title, id: todos.length + 1, isCompleted: false }
        })
        setTitle("");
    }
    console.log(todos);
    return (
        <section className="p-10 ">
            <form onSubmit={(e) => createTodo(e)}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    className="bg-gray-300 rounded-md p-2"
                    onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" onSubmit={(e) => createTodo(e)}>Add</button>
            </form>
            <div>
                {
                    todos && todos.map((todo) => (
                        <Todo todo={todo} key={todo.id} />
                    ))
                }
            </div>
        </section>
    )
}