import { useState, useEffect } from "react";


function CharactersPage() {
  const [people, setPeople] = useState([]);
  //this effect happens after the function finishes or after it displays the jsx
  useEffect(() => {
    fetch(`https://swapi.dev/api/people`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPeople(result.results);
      })
      .catch((err) => console.error(err));
  }, []);

  //order alphabetically by name
  //make a copy of our state
  const copyArr = Array.from(people);
  const alphabeticalPeople = copyArr.sort((a, b) => {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  });
  return (
    <div>
      <h1>Star Wars People</h1>
      <ul>
        {alphabeticalPeople.map((person, index) => {
          let color = person.eye_color;
          let trueEyeColor = color;
          if (color.includes("-")) {
            trueEyeColor = color.slice(color.indexOf("-") + 1);
          }

          return (
            <li
              className="star-wars-card"
              style={{ backgroundColor: trueEyeColor }}
              key={index}
            >
              <h2>{person.name}</h2>
              <p>{person.gender}</p>
              <p>{person.height}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharactersPage;

//DOM Manipulation

// list.forEach((item) =>{
//   //create
// const newLi = document.createElement("li");
// //modify
// newLi.textContent = item;
// //append
// document.body.append(newLi);

// });
