import React from "react";

function CategoryFilter({categories, cat, setCategory}) {
  
  const renderBtn = categories.map(category=>{
    const className = category === cat ? "selected" : ""; 
    return (
      <button 
        key={category} 
        className={className}
        onClick={()=> setCategory(category)}
      >{category}</button>
    )}
  )
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderBtn}
    </div>
  );
}

export default CategoryFilter;

// Whichever button was clicked should have a class of selected. 
// The other buttons should not have any class assigned.

// The list of tasks being displayed should be filtered, 
// so that only tasks that match the category that was 
// clicked are displayed.

// If the button for "All" is selected, 
// all the tasks should be displayed.
