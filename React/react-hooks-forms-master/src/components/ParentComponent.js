import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  return (
    <div>
        <Form
        firstName={firstName}
        lastName={lastName}
        newsletter={newsletter}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleNewsletterChange={handleNewsletterChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;