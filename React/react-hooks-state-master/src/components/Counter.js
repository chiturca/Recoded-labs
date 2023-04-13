import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count)

  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 1);
    setCount(count + 1);   //functioning asynchronously

    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);

    console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}



export default Counter;

