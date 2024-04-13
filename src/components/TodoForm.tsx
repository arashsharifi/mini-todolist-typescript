import React, { useState } from "react";

type TodoFormProps = {
  addTodoHandler: (title: string) => boolean;
};

const TodoForm = ({ addTodoHandler }: TodoFormProps) => {
  const [value, setValue] = useState<string>("");

  function handlerOnsubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value) {
      addTodoHandler(value);
      setValue("");
    }
  }
  return (
    <form
      onSubmit={handlerOnsubmit}
      action="#"
      className="w-full flex flex-col gap-3 items-center"
    >
      <h1 className="text-white text-2xl text-center"> Todo list 🎃 </h1>
      <div className="flex  rounded-md bg-transparent border h-12 w-full  border-indigo-900">
        <input
          className="pl-2 bg-transparent outline-0 border-none w-[70%] text-white"
          type="text"
          placeholder="what is the task today ??"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-[30%]  bg-indigo-900 text-white whitespace-nowrap duration-200 hover:bg-indigo-700"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
