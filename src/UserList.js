import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import {Table} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
function UserList(){

const [users,setUsers] = useState([])
const [loading,setLoading] = useState(true)
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{setUsers(response.data)})
    .then(()=>setLoading(false))
    .catch((error)=>{console.log(error)})
},[])
return(
    <div>
          <Table striped bordered hover>
      <thead>
        <tr>
       
          <th>#</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
            loading ?  <Spinner animation="border" variant="dark" /> :   users.map(el=><UserCard el={el}/>)
        }

        </tbody>
    </Table>
  
    </div>
)

   
}

export default UserList