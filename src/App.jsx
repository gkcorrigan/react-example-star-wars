import { useState } from "react";
import "./App.css";

function App() {
const [people, setPeople] = useState([]);

  return (
  <div>
    <h1>Star Wars People</h1>
    <ul>
      <li>{people.map((person) => {
        return <li>{person.name}</li>
      })}</li>
    </ul>
  </div>
  )
}

export default App;

//DOM Manipulation

// list.forEach((item) =>{
//   //create
// const newLi = document.createElement("li");
// //modify
// newLi.textContent = item;
// //append
// document.body.append(newLi);

// });
