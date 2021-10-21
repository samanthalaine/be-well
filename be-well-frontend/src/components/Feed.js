import "./feed.css";
//import {Posts} from "./dummyData"
import Post from './Post'
import Share from './Share'
import { useState, useEffect, useContext } from 'react'
import React from 'react'
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


function Feed() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() =>{
        const fetchPosts = async () => {

        const res = await axios.get('posts/timeline/' + user._id)
        setPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        }
        fetchPosts()
    }, [ user._id])

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
