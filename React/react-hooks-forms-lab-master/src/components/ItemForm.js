import React, { useState } from "react";
import { v4 as uuid } from "uuid"; 
      
function ItemForm({ onItemFormSubmit }) { 
  //console.log(onItemFormSubmit)  
  const [formData, setFormData]=useState({   //When setting the initial state for the <select> tag, use an initial value of "Produce"
    name: "",
    category: "Produce",
  })

  function handleFormChange(e) {      //make all input fields for this form controlled inputs  
    const name=e.target.name;
    const value=e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {     
    e.preventDefault();       //Handle the form's submit event, use data you saved in state to create a new item obj with id
    onItemFormSubmit({  id: uuid(), ...formData });  //Add the new item to the list by updating state  - onItemFormSubmit=cb
  }

  return (                    
    <form className="NewItem" onSubmit={handleSubmit}>      
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
