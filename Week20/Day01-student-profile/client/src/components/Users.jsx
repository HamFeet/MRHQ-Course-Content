import { useState,useEffect } from 'react';
import styles from './Users.module.css'

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {  
        fetch("http://localhost:4001/api/user")
        .then((res) => res.json())
        .then((result) => {
            return setUsers(result)
        })
    },[])


  return (
    <div>
      <div className={styles.container}>
        {users.map((element,index,array) => {
            return (
                <div className={styles.card} key={element.student_id}>
                <img className={styles.image} src={element.profile_pic} alt="student" />
                <p>{element.name}</p>
                </div>
            )
        })}
      
      </div>
    </div>
  );
}

export default Users
