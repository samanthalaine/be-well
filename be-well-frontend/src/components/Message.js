import { MessageSharp } from '@material-ui/icons'
import React from 'react'
import './message.css'
import { format } from "timeago.js";


function Message({message, own}) {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                    className="messageImg"
                    />
                    <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}

export default Message
