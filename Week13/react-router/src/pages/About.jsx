import { Link } from "react-router-dom"

function About() {
  return (
    <div>
        <h1>About Page🧞</h1>
        <Link to="/">Home</Link><br />
        <Link to="/Contact">Contact</Link><br />
        <Link to="/Login">Login</Link>
        <Link to="/Users">Users</Link>
    </div>
  )
}

export default About
