import React, { useEffect, useState } from "react";
import { RiCloseCircleLine as CloseIcon } from "react-icons/ri";
import { TiEdit as EditIcon } from "react-icons/ti";

function Todo(props) {
  const [edit, setEdit] = useState(false);
  const [updatedText, setUpdatedText] = useState(props.todo.text);

  const handleSubmit = (value) => {
    props.editTodo(props.todo.id, { ...props.todo, text: value });
    setEdit(false);
  };

  return (
    <div className={props.todo.completed ? "todo-row complete" : "todo-row"}>
      {!edit ? (
        <div onClick={() => props.completeTodo(props.todo.id)}>
          {props.todo.text}
        </div>
      ) : (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit(updatedText);
            }
          }}
        />
      )}
      <div className="icons">
        <CloseIcon
          className="delete-icon"
          onClick={() => props.removeTodo(props.todo.id)}
        />
        <EditIcon className="edit-icon" onClick={() => setEdit(true)} />
      </div>
    </div>
  );
}

export default Todo;
