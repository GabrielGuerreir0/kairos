import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";

export function MainForm() {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput type="text" id="task" labelText="Vou trabalhar em" />
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
