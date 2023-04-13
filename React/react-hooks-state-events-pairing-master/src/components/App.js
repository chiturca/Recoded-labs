import { useState } from "react";
import video from "../data/video.js";
import Counter from "./Counter.js";
import Comments from "./Comments";
import HideComments from "./HideComments.js";

function App() {
  const [hide, setHide]= useState(true)
  
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <div className="rowC">
      <Counter innerText={"👍"} votes={video.upvotes} />
      <Counter innerText={"👎"} votes={video.downvotes} />
      </div>
      <br/>
      <HideComments hide={hide} setHide={setHide} />
      <hr/>
      {hide? <Comments comments={video.comments}/> : null}
    </div>
  );
}

export default App;
