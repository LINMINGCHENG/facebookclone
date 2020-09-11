import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={}/>
        </div>
    )
}

export default Sidebar;
