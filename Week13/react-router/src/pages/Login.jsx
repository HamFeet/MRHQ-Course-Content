import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
        <h1>Login Page🪵</h1>
        <Link to="/Contact">Contact</Link><br />
        <Link to="/About">About</Link><br />
        <Link to="/">Home</Link>
    </div>
  )
}

export default Login
