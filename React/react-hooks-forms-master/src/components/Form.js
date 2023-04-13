import React from "react";

function Form(props) {

  return (
    <form>
      <input onChange={props.handleFirstNameChange} type="text" value={props.firstName} />
      <input onChange={props.handleLastNameChange} type="text" value={props.lastName} />
      <button type="submit">Submit</button>
      <br />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsletter}       //{/* checked instead of value */}
      />
      {/* <button type="submit">Subscribe</button> */}
    </form>
  );
}

export default Form;
