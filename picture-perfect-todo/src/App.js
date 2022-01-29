import React, { useState,useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // inputText is value, setInputText is function to change value
  // useState is the variable assigned
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
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
    setStatus={setStatus}
    />
    <TodoList 
    setTodos={setTodos} 
    todos={todos}
    filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;
