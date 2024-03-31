import React from 'react'
import './css/Header.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { signOut } from "firebase/auth";
import { auth } from './firebase';


const HeaderOptions = ({Icons,title,Avatar}) => {
const user = useSelector(selectUser)

  return (
    <div className='header__option'>
        {Icons && <Icons/>}
        {Avatar && <Avatar src ={user.photoURL} onClick={()=>{
          signOut(auth)
        }}/>}
    
        {title}
    </div>
  )
}

export default HeaderOptions