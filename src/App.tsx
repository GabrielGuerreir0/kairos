import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/home";
import { TaskContext } from "./contexts/TaskContext";

const intialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTaskId: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreak: 5,
    longBreak: 10,
  },
};

export function App() {
  const [state, setState] = useState(intialState);

  return (
    <TaskContext.Provider value={{ outraCoisa: 321 }}>
      <Home />
    </TaskContext.Provider>
  );
}
