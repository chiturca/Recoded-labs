import { useState } from "react";

function Counter({innerText, votes}) {
    const [count, setCount]=useState(0);

    return(
        <div>
            <button onClick={()=> setCount(count+1)}>{votes+count} {innerText}</button>
        </div>
    )
}

export default Counter;