import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../Storyreel/StoryReel'
import "./Feed.css"
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post profilePic="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                message="wow! this is work"
                timestamp="This is a timestamp"
                username="sannngha"
                image = "https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
