import React from "react";
import Task from "./Task";

function TaskList({ tasks, onClickDelete }) {
  // console.log(tasks)
  const displayTasks = tasks.map(task=> 
    <Task 
      key={task.text} 
      text={task.text} 
      category={task.category} 
      onClickDelete={onClickDelete} 
    />
  )

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
