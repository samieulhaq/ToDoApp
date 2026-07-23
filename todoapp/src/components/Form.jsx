import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add a new todo..."
        />
        <button className={styles.todoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
