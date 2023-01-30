import React, { useState } from "react";
import "./assets/_App.scss";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { todo } from "./model/Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<todo[]>([]);
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="Container">
      <Header />
      <Table
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        handleCHange={handleChange}
      />
    </div>
  );
};

export default App;
