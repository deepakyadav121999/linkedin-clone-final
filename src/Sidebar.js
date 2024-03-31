import React from 'react'

import './css/Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
const Sidebar = () => {
    const user = useSelector(selectUser)
  return (
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=600" alt="prf" />
            <div className="profile__details">
                <Avatar src ={user.photoURL}/>
                <h4>{user.displayName}</h4>
                <p>Frontend Developer</p>
            </div>
            <div className="profile__stats">
                <span>Who viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>
            <div className="profile__stats">
                <span>Connection<br/> <b>Grow Your Network</b> </span>
                <span className='stat__number'>150</span>
            </div>
        </div>
        <div className="sidebar__recent">
            <p>Recent</p>
            <p className="hash"><span>#</span>branding</p>
            <p className="hash"><span>#</span>marketing</p>
            <p className="hash"><span>#</span>frontenddeveloper</p>
            <p className="hash"><span>#</span>webdevelopment</p>
            <p className="hash"><span>#</span>programing</p>
            <p className="hash"><span>#</span>react</p>
        </div>

    </div>
  )
}

export default Sidebar