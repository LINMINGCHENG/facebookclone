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
            <Post profilePic="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                message="Two Jack O'lantern Lamps"
                timestamp="This is a timestamp"
                username="kJJJJ"
                image = "https://images.pexels.com/photos/619418/pexels-photo-619418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <Post profilePic="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                message="Chill in Vintage Restaurant"
                timestamp="This is a timestamp"
                username="jAZ_oK"
                image = "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>
    )
}

export default Feed
