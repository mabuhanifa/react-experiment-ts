import { useState, type FormEvent } from "react";
import CheckBox from "./components/CheckBox";
import { useDispatch, useSelector } from "./contextAPI/hooks";

export default function App() {
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
            <div key={todo.id} className="flex items-center p-2">
              <CheckBox todo={todo} />
              <h1 className={`text-2xl font-bold ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
              </h1>
            </div>
          ))
        }
      </div>
    </section>
  )
}
