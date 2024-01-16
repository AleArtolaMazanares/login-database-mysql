import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Login from '../../pages/login';
import Register from '../../pages/register';

function PageRoute() {
  return (
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
    </Routes>
  )
}

export default PageRoute