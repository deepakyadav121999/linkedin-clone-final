import React from "react";
import llogo from "./linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import './css/Header.css'
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import {useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";



const Header = () => {
  const user = useSelector(selectUser)

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={llogo} alt="logo" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icons={HomeIcon} title ="Home"/>
        <HeaderOptions Icons={PeopleIcon} title ="My Network"/>
        <HeaderOptions Icons={BusinessCenterIcon} title ="Jobs"/>
        <HeaderOptions Icons={MessageIcon} title ="Messaging"/>
        <HeaderOptions Icons={NotificationsIcon} title ="Notification"/>
        <HeaderOptions Avatar={Avatar} title ={user.displayName} />
      </div>
    </div>
  );
};

export default Header;
