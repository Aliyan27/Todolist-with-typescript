import React from "react";
interface prop {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ todo, setTodo }: prop) {
  return (
    <>
      <input
        type="text"
        placeholder="enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </>
  );
}

export default Input;
