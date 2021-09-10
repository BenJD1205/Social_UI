import React from 'react'
import './closeFriend.css'

export default function closeFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" alt="" src={user.profilePicture} />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
