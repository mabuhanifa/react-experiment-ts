import { FormEvent, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "../contextAPI/hooks";
import Todo from "./Todo";

export default function Todos() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((s) => s.todos);

  const createTodo = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (!title) return;
    dispatch({
      type: "ADD_TODO",
      payload: { title, id: todos.length + 1, isCompleted: false },
    });
    setTitle("");
  };

  return (
    <section className="p-2 py-10 md:p-10 ">
      <div className="flex justify-center">
        <form
          onSubmit={(e) => createTodo(e)}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            name="title"
            value={title}
            className="bg-gray-300 rounded-md p-2 placeholder:text-gray-600"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a todo"
          />
          <button
            type="submit"
            onSubmit={(e) => createTodo(e)}
            className="bg-blue-500 text-white rounded-md p-2.5"
          >
            <VscAdd size={20} />
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        {todos && todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
    </section>
  );
}
