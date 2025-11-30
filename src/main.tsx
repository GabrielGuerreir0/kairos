import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { Heading } from "./components/Heading";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Heading />
  </StrictMode>
);
