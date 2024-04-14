import { useEffect, useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.type";
import swal from "sweetalert";

const TodosWrappers = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  function addTodoHandler(title: string) {
    setTodos([...todos, { id: crypto.randomUUID(), title, complated: false }]);
    return true;
  }

  function deleteTodo(id: string) {
    swal({
      title: "doyou whant to delete item??",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        swal({
          title: "this todo is delete success",
          icon: "success",
          dangerMode: true,
        });
      }
    });
  }

  useEffect(() => {
    if (showAlert) {
      swal({
        title: "Task Status Updated",
        text: "Task status has been updated successfully!",
        icon: "success",
      });
    }
  }, [showAlert]);

  function toggleComplete(id: string) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complated: !todo.complated } : todo
    );
    setTodos(updatedTodos);

    // Show swal message conditionally based on a condition
    if (updatedTodos.some((todo) => todo.id === id && todo.complated)) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }

  return (
    <div className=" flex flex-col gap-5 p-5 bg-gray-950 rounded-md w-[70%] md:w-[30%] ">
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
