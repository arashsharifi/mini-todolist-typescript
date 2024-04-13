import React from "react";
import TodosWrappers from "./components/TodosWrappers";

const App = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-900 h-[100vh]">
      <TodosWrappers />
    </div>
  );
};

export default App;
