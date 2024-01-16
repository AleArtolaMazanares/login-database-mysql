import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [user, setUser] = useState({
        email:'',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/users',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({user})
        });
       if (user.password === user.password_confirmation) {
        if (response.ok) {
            const userData = await response.json();
            console.log(userData)
        }else{
            alert("algo succedio")
        }
       }else{
        alert("las contraseñas no son iguales")
       }
    }
 
  return (
    <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name='email' value={user.email} placeholder='email...' onChange={handleChange}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" value={user.password} placeholder='password...' onChange={handleChange}/>
            <br />
            <label>Password Confirmation:</label>
            <input type="password" name='password_confirmation' value={user.password_confirmation} placeholder='password confirmation...' onChange={handleChange}/>
            <br />
            <button type='submit'>Register</button>
        </form>

        <Link to={"/"}>Back</Link>
    </div>
  )
}

export default Register