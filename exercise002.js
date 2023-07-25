import fetch from "node-fetch";

//const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);


//Task 1; using async, await, try, catch
const fetchDataFunction = async() => {
  const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

  try {
    const response = await fetch(jsonTypicode);
    const json = await response.json();
    console.log(json);
  }
  catch(error) {
    console.log(error);
  }
}

fetchDataFunction()