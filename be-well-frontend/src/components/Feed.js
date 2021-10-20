import "./feed.css";
//import {Posts} from "./dummyData"
import Post from './Post'
import Share from './Share'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from "axios";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () => {

        const res = await axios.get('posts/timeline/6169c303a05f77c81d02d95b')
        setPosts(res.data)
        }
        fetchPosts()
    }, [])

    return (
        <>
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post)=>(
                    <Post key={post._id} post={post}/>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default Feed
