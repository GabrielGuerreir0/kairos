import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        activeTaskId: newTask.id,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        activeTaskId: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      // Mark current active task as completed and start next cycle automatically
      const finishedTaskId = state.activeTask?.id ?? null;

      const updatedTasks = state.tasks.map((task) => {
        if (finishedTaskId && task.id === finishedTaskId) {
          return { ...task, completeDate: Date.now() };
        }
        return task;
      });

      const nextCycle = getNextCycle(state.currentCycle);
      const nextCycleType = getNextCycleType(nextCycle);
      const nextDuration = state.config[nextCycleType];

      const newTask = {
        id: Date.now().toString(),
        name: nextCycleType,
        startDate: new Date(),
        completeDate: null,
        interruptedDate: null,
        duration: nextDuration,
        type: nextCycleType,
      };

      return {
        ...state,
        tasks: [...updatedTasks, newTask],
        activeTask: newTask,
        activeTaskId: newTask.id,
        currentCycle: nextCycle,
        secondsRemaining: nextDuration * 60,
        formattedSecondsRemaining: formatSecondsToMinutes(nextDuration * 60),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }
  return state;
}
