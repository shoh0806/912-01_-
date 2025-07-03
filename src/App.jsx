import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route , Link } from "react-router-dom";
import RockScissorsPaper from './page/RockScissorsPaper';
import Todo from './page/Todo'
import Navigation from './component/Navigation'

function App() {

  return (
    <div>
      <Navigation/>
      <Routes>
        
        <Route path='/' element={<RockScissorsPaper/>}/>
        <Route path='/todo' element={<Todo/>}/>
        
      </Routes>
      
      
  
    </div>
  )
}

export default App
