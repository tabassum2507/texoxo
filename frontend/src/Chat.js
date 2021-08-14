import React, { useState, useEffect, useParams } from 'react'
import './Chat.css';
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { SettingsInputAntenna } from '@material-ui/icons';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';


function Chat() {
    // const [seed, setSeed] = useState("");
    // const {roomId} = useParams();

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000));        
    // }, [roomId]);


    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
             {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}

            <div className="chat_headerInfo">
                <h2>Room Name</h2>
                <p>Last seen....</p>
            {/* <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p> */}
            </div>

            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>
            </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">
                        Sonny
                    </span>
                    This is a Message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_reciever">
                    <span className="chat_name">
                        Sonny
                    </span>
                    This is a Message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                </div>
            
            <div className="chat_footer">
                <SentimentSatisfiedOutlinedIcon />

                <form>
                    <input  placeholder="Type a message" type="text" />
                    <button className="Button1" type="submit">Send a message</button>
                   
                </form>
                <MicOutlinedIcon />

            </div> 
        </div>
    )
}

export default Chat
