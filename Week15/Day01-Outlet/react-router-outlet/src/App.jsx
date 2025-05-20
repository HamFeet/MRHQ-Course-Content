import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'
import Instructions from './pages/StudentDashboard/Components/Instructions'
import LearningObjectives from './pages/StudentDashboard/Components/LearningObjectives'
import VideoTutorial from './pages/StudentDashboard/Components/VideoTutorial'

import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/StudentDashboard' element={<StudentDashboard/>}>
          {/* Nested routes can only be accessed through parent route. */} 
          {/* So the path == "/StudentDashboard/Instructions" */}
          <Route path='Instructions' element={<Instructions/>}/>
          <Route path='LearningObjectives' element={<LearningObjectives/>}/>
          <Route path='VideoTutorial' element={<VideoTutorial/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
