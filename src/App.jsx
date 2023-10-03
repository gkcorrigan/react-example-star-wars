import MyButton from './components/MyButton'
import './App.css'

function App() {

 //conditional rendering. This example won't run but it shows how this would work in React
  // let x = "";

  // if (!user.loggedIn){
  //   x = "Click here to Login";

  // } else {
  //   x = "Welcome, " + user.name;
  // }
  const list = ["apples", "pears", "bananas", "mangos"];
  
  

  return (
   <div>
    <h1 className='myCoolClass'>Welcome to my app</h1>
    <MyButton foods={list}/>
    {list.map((element, index, array) => {
      return <li key={element + index}>{element}</li>
      })}
   </div>
  )
}

export default App


//DOM Manipulation


// list.forEach((item) =>{
//   //create
// const newLi = document.createElement("li");
// //modify
// newLi.textContent = item;
// //append
// document.body.append(newLi);

// });
