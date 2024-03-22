import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos Is.{completedTodos}</span>
      <span className={styles.item}>Total Todos Is:{totalTodos}</span>
      <span className={styles.item}>Copyright@RashidJuma2024</span>
    </div>
  );
}
