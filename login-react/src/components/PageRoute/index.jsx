import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Login from '../../pages/login';
import Register from '../../pages/register';
import Welcome from '../../pages/welcome';

function PageRoute() {
  return (
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='welcome/:id' element={<Welcome/>}/>
    </Routes>
  )
}

export default PageRoute