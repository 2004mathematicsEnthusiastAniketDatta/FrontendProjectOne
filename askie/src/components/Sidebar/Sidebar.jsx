import React from 'react'
import './Sidebar.css'

const Sidebar=()=>{
   return(
     <div className='sidebar'>
        <div className="top"><div id="menu-icon"><i class="ri-menu-2-line"></i></div>
        <div className="new-chat">
            <div className="plus"><i class="ri-chat-follow-up-line"></i></div>
            <p id='newchat'>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <div className="message-icon"><i class="ri-chat-1-line"></i></div>
            </div>
        </div>
        </div>
        <div className="buttom"></div>
     </div>

   )

}
export default Sidebar