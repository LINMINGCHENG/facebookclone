import React from 'react'
import './Sidebar.css'
<<<<<<< HEAD
import SidebarRow from '../SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from './avatar.png';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={avatar} title="Johnson"/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace"/>
            
=======
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
function Sidebar() {
    return (
        <div className="sidebar">
           
            <SidebarRow Icon={LocalHospitalIcon}/>
>>>>>>> f0a7d5f6a843f0ccb628607296045d473260f405
        </div>
    )
}

export default Sidebar;
