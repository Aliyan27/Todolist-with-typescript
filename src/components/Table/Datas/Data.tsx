import React from "react";
import { todo } from "../../../model/Model";
interface prop {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

function Data({ todos, setTodos }: prop) {
  function deleteItem(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <h2>Name</h2>
      <div className="dta">
        {todos.map((todos) => {
          return (
            <tr className={todos.todo}>
              <td> {todos.todo}</td>

              <td>
                <span className="btn" onClick={() => deleteItem(todos.id)}>
                  Delete
                </span>
              </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default Data;
