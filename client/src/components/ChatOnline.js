import React from 'react'
import './chatonline.css'

function ChatOnline() {
    return (
        <div className= "chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                        className="chatOnlineImg"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                        alt="" 
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Amy</span>
            </div>
        </div>
    )
}

export default ChatOnline
