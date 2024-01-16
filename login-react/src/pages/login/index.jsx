import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    };
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response = await fetch('http://localhost:3001/api/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({user:user})
        });
        if (response.ok) {
            const userData = await response.json();
           if (userData.user && userData.user.id !== undefined) {
            let idCliente = userData.user.id
            window.location.href = `/welcome/${idCliente}`
           }else{
            alert("Cuenta no registrada")
           }

        }else{
            alert("algo sucedio")
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name='email' value={user.email} placeholder='Email...' onChange={handleChange}/>
            <br />
            <label>Password:</label>
            <input type="password" name='password' value={user.password} placeholder='password...' onChange={handleChange}/>
            <br />
            <button type='submit'>Login</button>
        </form>
        <Link to={"/register"}>Register</Link>
    </div>
  )
}

export default Login