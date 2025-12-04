import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";
import type { HomeProps } from "../../pages/home";

export function MainForm({ state, setState }: HomeProps) {
  function handerClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 30,
        },
        formattedSecondsRemaining: "23:34",
      };
    });
  }
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput type="text" id="task" labelText="Vou trabalhar em" />
      </div>
      <button type="button" onClick={handerClick}>
        clicar
      </button>

      <div className={styles.formRow}>
        <p>O proximo intervalo é de {state.config.workTime}min</p>
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
