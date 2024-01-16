import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Welcome() {
    const {id} = useParams();
    const [saveUser, setSaveUser] = useState([])
    useEffect(() =>{
        const welcome = async() =>{
            const response = await fetch(`http://localhost:3001/api/users/${id}`,{
                method: 'GET',
            })
            if (response.ok) {
                const userData = await response.json();
                setSaveUser(userData)
            }else{
                alert("algo sucedio")
            }
        }
        welcome();
    },[]) 
  return (
    <div>
        <h1>Welcome {saveUser.email}</h1>
    </div>
  )
}

export default Welcome