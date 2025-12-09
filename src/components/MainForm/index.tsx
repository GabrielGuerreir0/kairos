import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput
          type="text"
          id="task"
          labelText="Vou trabalhar em"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className={styles.formRow}>
        <p>O proximo intervalo é de 10 min</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
