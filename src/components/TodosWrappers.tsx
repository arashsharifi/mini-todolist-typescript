import React, { useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.type";

const TodosWrappers = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function addTodoHandler(title: string) {
    setTodos([...todos, { id: crypto.randomUUID(), title, complated: false }]);
    return true;
  }

  function deleteTodo(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id: string) {
    console.log(id);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complated: !todo.complated } : todo
    );
    setTodos(updatedTodos);
  }

  console.log(todos);
  return (
    <div className=" flex flex-col gap-5 p-5 bg-gray-950 rounded-md w-[30%]">
      <TodoForm addTodoHandler={addTodoHandler} />
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodosWrappers;
