import axios from 'axios'
import { useState, useEffect } from 'react'

function Axios() {

    const [userData, setUserData] = useState([])

    // //Using fetch
    // useEffect(() => {
    //     fetch("https://reqres.in/api/users", {
    //         headers: {
    //             "x-api-key": "reqres-free-v1"
    //     }
    //     }).then(res => {
    //         return res.json()
    //     }).then(result => {
    //         console.log(result.data)
    //         setUserData(result.data)
    //     })
    // },[])

    //using axios
   useEffect(() => {
        axios.get("https://reqres.in/api/users", {
            headers: {
                "x-api-key": "reqres-free-v1"
   }}).then(res => {
    console.log(res.data.data)
    setUserData(res.data.data)
   }).catch(err => {
    console.log(err)
   })
   },[])

  return (
    <div>
      {userData.map((e) => {
        return (
            <>
                <p>{e.first_name} {e.last_name}</p>
                <img src={e.avatar} alt="" />
            </>
        )
      })}
    </div>
    
  )
}

export default Axios
