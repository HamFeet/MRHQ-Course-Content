import './App.css'
import ArrowFunction from './components/ArrowFunction';
import Form from './components/Form';
import FormExercise from './components/FormExercise';

function App() {

  function handleClick(){
    console.log("Button clicked");
  }


  return (
    <>
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* <ArrowFunction/> */}
      <Form/>
      <FormExercise/>
    </>
  )
}

export default App
