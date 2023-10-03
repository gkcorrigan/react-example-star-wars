import { useState } from "react";
function MyButton(props) {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Hello World");
  
  console.log(props.foods);

  function handleClick() {
    console.log("Handling the click event");
    setCount(count + 1);

    if (greeting == greeting.toLocaleLowerCase()) {
      setGreeting(greeting.toLowerCase());
    } else {
      setGreeting(greeting.toUpperCase());
    }

    // for(let i = onClick.textContent; i< textContent.length; i++)
    //     if ($`{changeCase}` ==  )  {
  }

  props.foods[count % props.foods.length]
  return (
    <div>
      <p>
        {`The current food is: ${props.foods[count % props.foods.length]}`}
      </p>
      <button onClick={handleClick}>I'm a button {count}</button>
      <p>{greeting}</p>
    </div>
  );
}

export default MyButton;

// function MyButton() {

//     const [count, setCount] = useState(0);

//     function handleClick(){
//         console.log("Handling the click event");
//         setCount(count +1);
//       }
//         return (
//             <button onClick={handleClick}>
//                 I'm a button {count}
//             </button>
//         );
//     }

//     export default MyButton;
