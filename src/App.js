import { useState } from "react";
import "./App.css";

// function Person(props) {
//   return (
//     <>
//       <h1>Name: {props.name || "John"}</h1>
//       <h1>Last Name: {props.lastName || "Doe"}</h1>
//       <h1>Age: {props.age || 30}</h1>
//     </>
//   );
// }

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
