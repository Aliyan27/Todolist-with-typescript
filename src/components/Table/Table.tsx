import React from "react";
import Btn from "./BTN/Btn";
import Input from "./Input/Input";
import Data from "./Datas/Data";
import { todo } from "../../model/Model";

interface prop {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleCHange: (e: React.FormEvent) => void;
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const Table = ({ todo, setTodo, handleCHange, todos, setTodos }: prop) => {
  return (
    <>
      <h2>Content</h2>
      <div className="Table">
        <Input todo={todo} setTodo={setTodo} />
        <Btn handleCHange={handleCHange} />
      </div>
      <Data todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Table;
