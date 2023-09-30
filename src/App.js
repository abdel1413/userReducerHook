import "./App.css";

import { Todo } from "./Todo";
import { PreviousState } from "./UseRef/PreviousState";
import { SCrollView } from "./UseRef/SCrollView";

function App() {
  return (
    <div className="App">
      <h2> useReducer Hook</h2>
      <Todo />
      <PreviousState />
      <SCrollView />
    </div>
  );
}

export default App;
