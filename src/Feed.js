import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './css/Feed.css'
import Post from './Post';
import {db} from './firebase'
import {addDoc,collection,serverTimestamp,onSnapshot,query, orderBy} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';




const Feed = () => {
  const user = useSelector(selectUser)
  let [feedValue,setfeedValue]=useState()
  let [postValue,setpostValue]=useState([])

const submitPost =async(e)=>{
 e.preventDefault()
let docRef= await addDoc(collection (db,"posts"),{
  name:user.displayName,
  description:"frontend Developer",
  message:feedValue,
  photoURL:user.photoURL,
  timestamp:serverTimestamp()
 })
 setfeedValue("")

}
const feedInput =(e)=>{
 setfeedValue(e.target.value)
}
useEffect(()=>{
  let collectionRef = collection(db,"posts")
const q = query(collectionRef,orderBy("timestamp","desc"))
 const postMan =onSnapshot(q,(snapshot)=>
 setpostValue(snapshot.docs.map((doc)=>({
  id:doc.id,
  data:doc.data()
 })))
 )
 return postMan
},[])


  return (
    
    <div className='feed'>
        <div className="feed__input">
          <div className="feed__form">
          <Avatar src ={user.photoURL}/>
     <form onSubmit={submitPost}>
        <input type="text" placeholder='Start a post' onChange={feedInput} value={feedValue}/>
        <input type="submit" />
     </form>
          </div>
    
       
        <div className="feed__options">
          <div className="option">
        <PhotoIcon style={{color: '#70b5f9'}}/>
        <span>Photo</span>
          </div>
          <div className="option">
        <YouTubeIcon style={{color: '#7fc15e'}}/>
        <span>Video</span>
          </div>
          <div className="option">
        <TodayIcon style={{color: '#e7a33e'}}/>
        <span>Event</span>
          </div>
          <div className="option">
        <AssignmentIcon style={{color: '#fc9295'}}/>
        <span>Write Article</span>
          </div>
        

          </div>
        </div>
        <FlipMove>
        {postValue && postValue.map(({id,data:{name,description,message,photoURL}})=>{
         return (
         
         <Post key={id} name ={name} description={description} message ={message} photoURL ={photoURL}
      />)
        })}
        </FlipMove>
       
    </div>
  )
}

export default Feed