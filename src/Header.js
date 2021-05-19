import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import {Link} from 'react-router-dom';
import './Header.css'
import './App.css'
import React, { useState } from 'react';
const Header = () => {
    const [SerchInput , setSerchInput] = useState("")
    return (
        <div className="header">
            <div className = "left"> 
            <MenuIcon/>  
            <Link to = "/">
            <img  className = "header_icon" src= "https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png" alt = "youtube"/>
            </Link>
            </div>
             <div className = "middle">
            <input 
            type = "text"
            placeholder = "search here"
            onChange  = {e=> setSerchInput(e.target.value) }
            value = {SerchInput}
            />
            <Link  to = {`/search`}>
            <SearchIcon className = "serchbtn"/>
            </Link>
            <MicIcon className = "serchbtn"/>
             </div>
             <div className = "right"> 
            <VideoCallIcon className = "icons"/>
            <AppsIcon className = "icons"/>
            <NotificationsIcon className = "icons"/>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
             </div> 
        </div>
    )
}

export default Header
