import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
        <h1>Contact Page📞</h1>
        <Link to="/">Home</Link><br />
        <Link to="/About">About</Link><br />
        <Link to="/Login">Login</Link>
    </div>
  )
}

export default Contact
