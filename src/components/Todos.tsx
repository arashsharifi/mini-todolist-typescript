import React from "react";
import { PiTrashSimpleBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { Todo as TodoType } from "./Todos.type";

type TodosProps = {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
};
const Todos = ({ todo, deleteTodo, toggleComplete }: TodosProps) => {
  return (
    <ul className="flex flex-col gap-5 w-full">
      <li className="flex gap-2 justify-between items-center p-4 bg-indigo-800 rounded-md text-white ">
        <p
          className={
            todo.complated ? "duration-200 line-through" : "no-underline"
          }
        >
          {todo.title}
        </p>
        <div className="flex gap-4">
          <PiTrashSimpleBold
            onClick={() => deleteTodo(todo.id)}
            className="duration-200 cursor-pointer text-xl text-white hover:text-red-600"
          />
          <FaCheck
            onClick={() => toggleComplete(todo.id)}
            className={
              todo.complated
                ? "duration-200 cursor-pointer text-xl text-white bg-green-600 p-1 rounded-md"
                : "duration-200 cursor-pointer text-xl text-white hover:text-green-600"
            }
          />
        </div>
      </li>
    </ul>
  );
};

export default Todos;
