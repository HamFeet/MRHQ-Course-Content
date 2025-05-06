import { Link, useParams } from "react-router-dom"

function Book() {

    const params = useParams();


  return (
    <div>
        <h1>Book page</h1>
        <Link to="/">Home</Link>
        <p>You are about to access book: {params.id}</p>
    </div>
  )
}

export default Book
