import React from 'react'
import { Auth,Provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigator = useNavigate()

  const signIn = () =>{
     
  signInWithPopup(Auth,Provider)
  .then(res=>{console.log("sign in");navigator("/")})
  .catch(err=>console.log(err))

  }





  return (
    <div className='login-page'>
      <h1>Login</h1>
      <button onClick={signIn} className='button'>Sign in with Google</button>
    </div>
  )
};

export default Login