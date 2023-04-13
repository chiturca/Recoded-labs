import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {
  let hogImg= normalBaby
  if(eyeColor==="blue"){
    hogImg = BlueBaby
  }else if(eyeColor==="sun"){
    hogImg = SunBaby
  }else if(eyeColor==="glowing"){
    hogImg = GlowingBaby
  }

  let [weight, setWeight]= useState(200)
  // console.log(weight)


  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    setWeight(e.target.name=== "+" ? weight++ : weight)
    setWeight(e.target.name=== "-" ? weight-1 : weight)
  }
  

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} kg</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={hogImg}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
