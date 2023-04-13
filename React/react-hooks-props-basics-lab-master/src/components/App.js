import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city} />
      <About bio={user.bio} />
    </div>
  );
}

export default App;
