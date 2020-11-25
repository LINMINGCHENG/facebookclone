import React, {useState,useEffect} from 'react';
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import "./Feed.css"
import db from './firebase'



function Feed() {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
           db.collection('posts').onSnapshot((snapshot) => {
               setPosts(snapshot.docs.map((doc)=>({
                   id:doc.id,
                   data:doc.data()
               })));
    },[]);
  
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            
            {posts.map((post)=>
            (
             <Post
              key={post.id}
              profilePic={post.profilePic}
              message={post.message}
              timestamp={post.timestamp}
              username={post.username}
              image={post.image}    
             />
            ))}
             <Post profilePic="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                message="Two Jack  Lamps"
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
