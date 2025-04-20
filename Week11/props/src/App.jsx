import './App.css'
import Car from "./components/Car.jsx";
import Person from "./components/Person.jsx"

function App() {

  const name = "Josh";
  const age = 2;
  function multiply(x,y){
    return x * y;
  }
    // Array.map() exercise
  const fruitOrder = [
    {
      name: "Apple",
      qty: 3,
      singlePrice: 0.25,
    },
    {
      name: "Mango",
      qty: 6,
      singlePrice: 0.35,
    },
    {
      name: "Banana",
      qty: 4,
      singlePrice: 0.15,
    },
  ];
  const newArray = fruitOrder.map(function (e, index) {
    return `${index + 1}) ${e.qty} units of ${e.name} costs ${(e.singlePrice * e.qty).toFixed(2)}`
  })
  const users = [
    { id: 1, name: "Sally Rogers" },
    { id: 2, name: "Buddy Sorrell" },
    { id: 3, name: "Millie Helper" },
  ];

  // Object destructuring
  let person = {
    firstName: "Josh", 
    lastName: "Feetham"
  }
  // property: variable 
  let {firstName : fName, lastName : lName} = person;
  // When property name === Variable name
  let {firstName, lastName} = person;
  // console.log(firstName);
  // console.log(lastName);   

  const myObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      companyName: "Romaguera-Crona",
      catchPhrase: "It's collaboration time",
      bs: "harness real-time e-markets",
    },
  };
  let {username, email} = myObj;

    console.log(username);
    console.log(email);

   

  return (
    <>
      {users.map((e, i) => {
        return (
          <div>
            {e.name}
          </div>
        )
      })}  {users.map((e, i) => {
        return (
          <div key={e.id}>{e.name}</div>
        )
      })}


    <h1>Trademe Motors</h1>
    <h2>User: {name}</h2>
    <h3>Credit: {100 + 99}</h3>
    <h4>Number Result: {multiply(2,3)}</h4>
    <p>{age >= 18 ? "You can vote" : "You can't vote"}</p>

    {/* Using array in JSX */}
    {[true, 31, "Jordan", <a>Facebook</a>]}

    {newArray};
     
    <Car make="Tesla" year={2020} price="$64999"/>
    <Car make="Ford" year={2020} price="$30000"/>
    <Person age={21} name="Jimmy"/>
    </>
  )
}

export default App
