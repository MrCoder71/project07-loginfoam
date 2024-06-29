import React from 'react'

// import css file
import './App.css';

// import icon
import { FaAt } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";


const App = () => {
  return (


    <form class="form">

      <p id="heading">Login</p>


      <div class="field">

          <FaAt className='input-icon' />

          <input autocomplete="off" placeholder="Username" class="input-field" type="text" />
      
      </div>


      <div class="field">
          
          <FaUnlockKeyhole className='input-icon' />

          <input placeholder="Password" class="input-field" type="password" />
      
      </div>

      <div class="btn">
          
          <button class="button1">Login</button>
          
          <button class="button2">Sign Up</button>
      
      </div>
      
        <button class="button3">Forgot Password</button>
    
    </form>


  )
}

export default App;
