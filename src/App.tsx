import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/home";

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

  return <Home state={state} setState={setState} />;
}
