import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} 
                   className="post_avatar" 
                />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">

                </div>

            </div>
        </div>
    )
}

export default Post
