import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import { Home } from "./pages/home";
import { TaskContextProvider } from "./contexts/TaskContext";

export function App() {
  const [state, setState] = useState(intialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
