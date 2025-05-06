import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Home page🏠</h1>
        <Link to="/Contact">Contact</Link><br />
        <Link to="/About">About</Link><br />
        <Link to="/Login">Login</Link><br />
        <Link to="/Users/:id">Users Profile</Link><br />
        <Link to="Book/:id">Book</Link>
    </div>
  )
}

export default Home
