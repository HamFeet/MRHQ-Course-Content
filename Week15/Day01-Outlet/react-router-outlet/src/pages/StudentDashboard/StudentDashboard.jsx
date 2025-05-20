import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function StudentDashboard() {
  return (
    <div>
      <Outlet/>
      <h2>StudentDashboard Page</h2>
      <Link to="/">Home</Link><br />
      <Link to="instructions">Instructions</Link><br />
      <Link to="LearningObjectives">Learning Objectives</Link>  <br />
      <Link to="VideoTutorial">Video Tutorial</Link><br />
    </div>
  )
}

export default StudentDashboard
