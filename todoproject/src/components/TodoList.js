import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTodo) => {
    if (!updatedTodo.text || /^\s*$/.test(updatedTodo.text)) {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };


  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

// const example = [
//   { id: 1, task: "wash the dishes", completed: false },
//   { id: 2, task: "sweep the floor" },
//   { id: 3, task: "take out the trash" },
// ];

// const newExample = [
//   { id: 4, task: "mop" },
//   { id: 1, task: "wash the dishes" },
//   { id: 2, task: "sweep the floor" },
//   { id: 3, task: "take out the trash" },
// ];

// {todos.map((todo) => (
//   <Todo todo={todo} />
// ))}
