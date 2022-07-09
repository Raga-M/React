
import './App.css';
import{useState} from "react"
function App() {
  const [display, setDisplay]=useState(0);
 function incrementDisplay()
 {
  setDisplay(display+1)
 }

//arrow function
 const decrementDisplay=()=>
 {
  setDisplay(display-1)
 }
  return (
<>
<h3>{display}</h3>
<button onClick={incrementDisplay}>Increament</button>
<button onClick={decrementDisplay}>decrement</button>
</>
  );
}

export default App;
