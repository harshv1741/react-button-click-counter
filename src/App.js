import "./styles.css";
import { useState } from "react";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function clickCounter() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }

  console.log("Like Counter: " + likeCounter);
  return (
    <div className="App">
      <h1 className="pageTitle">Click Counter</h1>
      <br />
      <br />
      <button onClick={clickCounter} className="btn btnPrimary">
        Click
      </button>
      <br />
      <br />
      <h3 className="pageTitle">Counter Value: {likeCounter}</h3>
    </div>
  );
}
