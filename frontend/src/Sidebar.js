import React from 'react';
import './Sidebar.css';
import MessageIcon from '@material-ui/icons/Message';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                < Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <MessageIcon /> 
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                    

                </div>
            </div>

            <div className="sidebar_search">
               <div className="sidebar_searchContainer">
                <SearchOutlinedIcon />
                <input placeholder="search or start a new chat" type="text" />
               </div>
            </div>
        
        <div className="sidebar_chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
            
        </div>
    )
}

export default Sidebar
