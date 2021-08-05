import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup  () {
  const [isActive, setActive] = useState("true");
  const [username_login,setUsername_login] = useState(null)
  const [password_login,setPassword_login] = useState(null)
  const [username_signup,setUsername_signup] = useState(null)
  const [password_signup,setPassword_signup] = useState(null)
  const [email_signup,setEmail_signup] = useState(null)

  function handleLogin(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/login',{
      'username_login' : username_login,
      'password_login' : password_login
    })
    .then()
    .catch(err=> console.error(err))
  }

  function handleSignup(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/signup',{
      'username_signup' : username_signup,
      'password_signup' : password_signup,
      'email_signup' : email_signup
    })
    .then()
    .catch(err=> console.error(err))
  }

  const handleToggle = () => {
    setActive(!isActive);
  };
    return (
      <div className="maindiv">
       <p class="tip">Click on button in image container</p>
       <div className={`cont ${isActive ? "s--signup" : ""}`}>
          <div className="form sign-in">
           <h2 className="header2">Welcome back,</h2>


    <form onSubmit = {handleLogin} >
      <label className="signuplabel">
      <span>Username</span>
      <input type="username" value={username_login || ''} onChange = {(e)=> setUsername_login(e.target.value)}/>
    </label>
    <label className="signuplabel">
      <span>Password</span>
      <input type="password" value={password_login || ''} onChange = {(e)=> setPassword_login(e.target.value)}/> 
    </label>
    <button type="submit" className="submit">Sign In</button>
    </form>
    
  </div>
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h2 className="header2">New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
       
      <div className="img__btn" onClick={handleToggle}>
        <span className="m--up" >Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>
    </div>
    <div className="form sign-up">
      <h2 className="header2">Time to feel like home,</h2>

      <form onSubmit = {handleSignup}>
        <label className="signuplabel">
        <span>Username</span>
        <input type="username" value={username_signup || ''} onChange = {(e)=> setUsername_signup(e.target.value)}/>
      </label>
      <label className="signuplabel">
        <span>Email</span>
        <input type="email" value={email_signup || ''} onChange = {(e)=> setEmail_signup(e.target.value)}/>
      </label>
      <label className="signuplabel">
        <span>Password</span>
        <input type="password" value={password_signup || ''} onChange = {(e)=> setPassword_signup(e.target.value)}/>
      </label>
      <button type="submit" className="submit" >Sign Up</button>
      </form>
      
    </div>
  </div>
</div>
      </div>
    );
}
 
export default Signup;