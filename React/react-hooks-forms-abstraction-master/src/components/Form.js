import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
      // name is the KEY in of the formData object we're trying to update
      const name = event.target.name;
      const value = event.target.value;

      if (event.target.type==="checkbox") {   // use `checked` property of checkboxes instead of `value`
        value = event.target.checked;
      }

    setFormData({
      ...formData,  // formData is an object, so we need to copy all the key/value pairs
      [name]: value,  // we want to overwrite the name key with a new value
    });
  }

  return (
    <form>
      First Name:
      <br />
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <br />
      Last Name:
      <br />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <br />
      Admin?
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
