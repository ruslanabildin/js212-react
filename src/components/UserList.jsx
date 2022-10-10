import { useState } from "react"
import { useEffect } from "react"

export default function UserList(){
const[users,setUsers]= useState([])
useEffect( ()=> {
    fetch('https://reqres.in/api/users')
    .then (response=> response.json())
    .then(answer => setUsers(answer.data))
      
},[])

return<> 

<ul>
    {
        users.map((item,index)=> <li key={index}> 
        {item.first_name} {item.last_name}
        </li> )
    }
   
</ul>

</>
}