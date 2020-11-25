import React, { useState } from 'react';
import "./MessageSender.css"
import Avatar from '@material-ui/core/Avatar'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../../states/StateProvider';
function MessageSender() {
     const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
        setImageUrl("");
    };



    return (
      <div className="messageSender">
        <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}    
                    className="messageSender_input"
                    placeholder={`what's your mind, ${user.displayName}?`}>
                    </input>
                    <input
                        value={imageUrl}    
                    onChange ={(e)=>setImageUrl(e.target.value)}
                    placeholder="image URL(Optional)">
                    </input>
                     <button onclick={handleSubmit} type="submit">
                    Hidden submit
                </button>
                 </form>
               
        </div>
        <div className="messageSender_bottom">
                <div className="messageSender_Option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_Option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_Option">    
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
                
        </div>
      </div>
    );
}

export default MessageSender
