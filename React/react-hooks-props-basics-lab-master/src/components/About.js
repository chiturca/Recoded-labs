import React from "react";
// import user from "../data/user";
import Links from "./Links";

function About(users) {
  return (
    <div id="about">
      <h2 style={{ color: users.color }}>About Me</h2>
      {users.bio ? <p>{users.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links />

    </div>
  );
}

export default About;
