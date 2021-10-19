import './rightbar.css'
import "./feed.css";
import {Posts} from "./dummyData"
import Post from './Post'
import React from 'react'

function Rightbar() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Rightbar
