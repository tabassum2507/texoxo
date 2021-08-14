import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>this is the last Message</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
