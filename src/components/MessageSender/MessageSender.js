import React from 'react'
import "./MessageSender.css"
import Avatar from '@material-ui/core/Avatar'
function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
     }



    return (
      <div className="messageSender">
        <div className="messageSender_top">
                <Avatar />
                <input className="messageSender_input"
                 placeholder={`what's your mind`}></input>
                <input placeholder="image URL(Optional)"></input>

                <button onclick={handleSubmit} type="submit">
                    Hidden submit
                </button>
        </div>
        <div className="messageSender_bottom">
                
                
        </div>
      </div>
    );
}

export default MessageSender
