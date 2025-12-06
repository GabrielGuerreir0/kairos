import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export function ContDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return <div className={styles.container}>00:00</div>;
}
