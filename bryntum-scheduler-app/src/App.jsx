import { BryntumScheduler } from "@bryntum/scheduler-react";
import { schedulerConfig } from "./SchedulerConfig";
import "./App.scss";

function App() {
  return <BryntumScheduler {...schedulerConfig} />;
}

export default App;
