import styles from "./footer.module.css";

export default function Footer({ completed, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completed}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
