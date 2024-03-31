import React, { useState } from 'react';
import './css/Login.css'
import { auth } from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginuser } from './features/userSlice';

const Login = () => {
  const dispatch = useDispatch()
  const[signup,setSignUp] = useState(false)
  const[name,setName] = useState("")
  const[photoURL,setphotoURL] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  let loginBtn =()=>{
  
setSignUp(false)
  }
  let loginForm =(e)=>{
    e.preventDefault();
    if(!email){
      alert ("email is required")
    }
    if(!password){
      alert ("password is required")
    }
   signInWithEmailAndPassword(auth,email,password).then(({user})=>{
dispatch(loginuser({
     email:auth.currentUser.email,
      uid :auth.currentUser.uid,
      photoURL:auth.currentUser.photoURL,
      displayName:auth.currentUser.name,
}))
   }).catch((err)=>alert(err))
  }

  let signUpForm =(e)=>{
    e.preventDefault();
    if(!name){
      alert ("Name is required")
    }
    if(!photoURL){
      alert ("photoURL is required")
    }
    if(!email){
      alert ("email is required")
    }
    if(!password){
      alert ("password is required")
    }
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
      updateProfile(auth.currentUser, { displayName: name,
       photoURL:photoURL})
    
    
    }).then(()=>{dispatch(loginuser({
      email:auth.currentUser.email,
      uid :auth.currentUser.uid,
      photoURL:photoURL,
      displayName:name,
    
    }))}).catch((err)=>alert(err))

    
    setEmail('')
    setPassword('')
    setName('')
    setphotoURL('')
    
  }
  let registerBtn=()=>{
    setSignUp(true)
  }
  return (
    <>
    
    <div className='loginScreen'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
      {signup?(
        <form onSubmit={signUpForm}>
      <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='Profile Picture URL' value={photoURL} onChange={(e)=>setphotoURL(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="submit"  value="Sign Up" className='loginsubbtn' style={{ border: "none"}}/>
      <h4>Already a member? <span onClick={loginBtn}>Login Here </span></h4>
     </form>
      ):(<form onSubmit={loginForm}>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input className='loginsubbtn'  style={{ border: "none"}} type="submit"/>
        <h4>Not a member? <span onClick={registerBtn}>Register Here</span></h4>
      </form>)}
     
        
    </div>
    </>
  )
}

export default Login