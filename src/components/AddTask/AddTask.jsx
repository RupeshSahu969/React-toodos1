import React, { useState } from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";
import Counter from "../Counter/Counter";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair

  let [value,setvalue] =useState("")

  const [todos,setTodos] =useState([])

  const onDelete =(id)=>{
   let newTodos = todos.filter(todo => todo.id !==id);
   setTodos(newTodos)
  }



  return (
    <div className={styles.todoForm}>
      <h1>Todo List</h1>

      <input value={value}
      
      onChange={(e) => {setvalue(e.target.value)}}
      data-cy="add-task-input" type="text" placeholder="Add task..." />
      <button 
        onClick={() =>
          {
              setTodos([
                  ...todos,
                  {id: Date.now(), value: value}
              ]);
          setvalue("")
          }}
      
      data-cy="add-task-button">+</button>

<div className={styles.todoForm}>


{todos.map((todo) => (
            <Task key={todo.id} todo={todo} onDelete={onDelete} />
            // <div>{todo.value}</div>

        ))}



</div>


    </div>
  );
};

export default AddTask;
