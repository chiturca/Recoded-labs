import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTasks(deleted) {
    setTasks(tasks.filter(task=>task.text !== deleted))
  }

  const categoryFilter = tasks.filter((task)=> category==="All" || category===task.category)
  // console.log(categoryFilter)

  function handleAddTasks(added) {
    setTasks([...tasks, added])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} cat={category} setCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTasks} />
      <TaskList tasks={categoryFilter} onClickDelete={handleDeleteTasks}/>
      
    </div>
  );
}

export default App;
