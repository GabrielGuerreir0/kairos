import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: Date;
  completeDate: number | null;
  interruptedDate: number | null;
  type: keyof TaskStateModel["config"];
};
