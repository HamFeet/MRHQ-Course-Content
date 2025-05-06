import { Link, useParams } from "react-router-dom"

function Users() {

    const params = useParams();
    console.log(params.id);

  return (
    <div>
        <h1>Users Page</h1>
        <p>We can get the parameter ID from the URL: {params.id}</p>
        <Link to="/">Home</Link><br />
        {/* <UsersProfile/> */}
    </div>
  )
}

export default Users
