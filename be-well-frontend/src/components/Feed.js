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

        const res = await axios.get('posts/timeline/616b47b8fe9bd3d17ce9145b')
        console.log(res)
        }
        fetchPosts()
    }, [])

    return (
        <>
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/* {Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))} */}
            </div>
            
        </div>
        </>
    )
}

export default Feed
