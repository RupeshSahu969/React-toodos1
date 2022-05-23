import React, { useState } from "react";
import styles from "./task.module.css";


const Task = ({todo, onDelete}) => {

  const [isCompleted , setIsCompleted] =useState(todo.isCompleted);

  // NOTE: do not delete `data-cy` key value pair

  return (



    <li data-cy="task" className={styles.task}   key={todo.id}>
      <input  type="radio" data-cy="task-checkbox" checked={isCompleted}
      
      onChange={(e) => {
        setIsCompleted(e.target.checked);
    }}
      />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <button  onClick={()=> onDelete(todo.id)} data-cy="task-remove-button">
        <img src="https://rct-101-e1.herokuapp.com/static/media/remove.594565521f1cb906afc386cb65a7e793.svg" />
      </button>
    </li>
  );
};

export default Task;
