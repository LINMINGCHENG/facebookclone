import React from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
function Sidebar() {
    return (
        <div className="sidebar">
           
            <SidebarRow Icon={LocalHospitalIcon}/>
        </div>
    )
}

export default Sidebar;
