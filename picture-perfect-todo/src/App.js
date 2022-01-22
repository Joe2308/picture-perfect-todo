import React, { useState } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // inputText is value, setInputText is function to change value
  // useState is the variable assigned
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Picture Perfect</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList todos={todos}/>
    </div>
  );
}

export default App;
