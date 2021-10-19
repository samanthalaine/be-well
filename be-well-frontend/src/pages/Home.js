import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'
import "./home.css"



function Home() {
    return (
        <>
          <Navbar />
          <div className="homeContainer">
            <Leftbar />
            <Feed/>
            <Rightbar/>
          </div>
        </>
      );
    }
export default Home
