import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = value => {
      props.updateTodo(edit.id,value);
      setEdit({
          id:null,
          value:value,
      });
  }

  if(edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return props.todos.map((todo, index) => {
      if(todo.text.trim()==="")return null;
        return (
            <div
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div
                key={todo.id}
                onClick={() => {
                  props.completeTodo(todo.id);
                }}
              >
                {todo.text}
              </div>
              <div className="icons">
                <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} className="delete-icon"/>
                <TiEdit onClick={() => setEdit({id:todo.id,value:todo.text})} className="edit-icon"/>
              </div>
            </div>
          );
  });
};

export default Todo;
