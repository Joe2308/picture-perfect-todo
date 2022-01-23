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
      <header className="logo-home">
      <img src={"./icon.png"} alt="" height="300" width="" />
    </header>
    <div className="home-title">
      <h1 className="">On Tour</h1>
      </div>
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    />
    <TodoList 
    setTodos={setTodos} 
    todos={todos}
    />
    </div>
  );
}

export default App;
