import "./feed.css";
import {Posts} from "./dummyData"
import Post from './Post'
import Share from './Share'

import React from 'react'

function Feed() {
    return (
        <>
        
        <div className="feed">
            <div className="feedWrapper">
            <Share />
                {Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default Feed
