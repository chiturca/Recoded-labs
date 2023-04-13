import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit,}) {
  // console.log(categories)
  //display <option>for each category inside <select> except "All"
  //update form to be a controlled component,so all form inputs are captured in state
  //submitted? add task to list w/ text-category from form  cb=**onTaskFormSubmit
  const [inputs, setInput]= useState("");
  const [category, setCategory]= useState("Code")
  // console.log(setCategory)

  const options=categories.map(category=>{
    // console.log(category)
    const c= category==="All" ? "" : category
    return(
      <option key={c}>{c}</option>
    )})
    // console.log(options)

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text: inputs, category: category })
    setInput("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" placeholder=" New Task Here" value={inputs} onChange={(e)=> setInput(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} >
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
