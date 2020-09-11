import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.css'
function SidebarRow({src,Icon,title}) {
    return (
        <div className="siderbarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
        </div>
    )
}

export default SidebarRow
