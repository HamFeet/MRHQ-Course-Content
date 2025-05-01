import './App.css'
import { useEffect,useState } from 'react'
import Header from './components/Header'
import TaskField from './components/TaskField'
import TaskList from './components/TaskList'

function App() {

  const [task, setTask] = useState("")
  const [taskArray, setTaskArray] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // taskArray.push(task);
    if (task){
      console.log("Form submitted")
      return setTaskArray([...taskArray, task]);
    }
    else{
      alert("Please enter a task!")
      console.log("Form submitted incorectly")
    }
  }

  const handleUserInput = (e) => {
    // console.log(e.target.value)
    return setTask(e.target.value)
  }

  const deleteTask = (i) => {
    taskArray.splice(i, 1)
    return setTaskArray([...taskArray]);
  }

  return (
    <div className='container'>
      <Header userName="Joshua"/>
      <TaskField handleSubmit={handleSubmit} handleUserInput={handleUserInput}/>
      <TaskList taskArray={taskArray} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
