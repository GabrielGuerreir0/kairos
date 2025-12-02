import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTaskId: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreak: number;
    longBreak: number;
  };
};
