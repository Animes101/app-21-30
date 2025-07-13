import { useState } from 'react'
import { FaFacebook } from "react-icons/fa";

import './App.css'
import State from './components/State';
import LoginShow from './components/LoginShow';


function App() {



  return (
    <>
    <h1>hello world</h1>
    <h2>react con <FaFacebook /></h2>


    <div>
      <State />
     <LoginShow />
      
    </div>
    </>
  )
}

export default App
