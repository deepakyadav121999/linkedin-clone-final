import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './index.css';
import Feed from './Feed';
import Rightsidebar from './Rightsidebar';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  let user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth)=>{
     
        if(userAuth){
       
          dispatch(loginuser({
            email:userAuth.email,
            uid :userAuth.uid,
            photoURL:userAuth.photoURL,
            displayName:userAuth.displayName,
          
          }))
          }
          else{
           dispatch(logoutuser())
          }
      
    
    })
    // eslint-disable-next-line
     },[])

  return (
    <>
    {user?<div className="app__wrapper">
     <Header/>
     <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Rightsidebar/>
     </div>
    </div>:<Login/>}
    
    </>
  );
}

export default App;
