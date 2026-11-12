import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerTodo}>
      <h1 className={styles.title}>React TODO</h1>
      <h2 className={styles.subtitle}>Crie aqui sua lista de tarefas</h2>
    </div>
  );
}

export default Header;
