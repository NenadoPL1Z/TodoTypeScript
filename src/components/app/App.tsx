import React from "react";
import '../../sass/style.scss';
import Todo from "../context/InfoContext";
import TodoBody from "../TodoBody/TodoBody";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoHeader from "../TodoHeader/TodoHeader";

const App = () => {
  return (
    <>
      <Todo>
        <TodoHeader/>
        <TodoBody/>
        <TodoFooter/>
      </Todo>
    </>
  );
};

export default App;
