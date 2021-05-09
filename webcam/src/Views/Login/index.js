import '../../Assets/Css/login.css'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import BgLogin from '../../Assets/Background/BgLogin.js'

import React, { useState } from 'react'


function Login() {
  const [signin, setSignin] = useState(null)
  const [signup, setSignup] = useState(false)

  const handleSignin = () => {
    setSignin(!signin)
    setSignup(false)
  }
  const handleSignup = () => {
    setSignup(!signup)
    setSignin(false)
  }
  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div id="bx-login">
        <BgLogin />
        {signin ? <SignIn status={signup}/> : signin == null ? " " : <SignUp status={signin}/>}
        <div>
          <div id="box-button">
            <div className={signup ? "d-none" : "box-sign-up"} onClick={handleSignup}>
              <div id="btn-sign-up" >
                <small>Don't Have Account ?</small>
                <span>Sign Up</span>
              </div>
            </div>
            <div className={signin ? "d-none" : "box-sign-in"} id="" onClick={handleSignin}>
              <div id="btn-sign-in">
                <span>Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
