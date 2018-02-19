import React from 'react'

const DialogTab = ({author, content, time}) => (
    <div className="DialogTab">
        <p className="DialogTabName">{author}</p>
        <span className="DialogTabSettings"></span>
        <span className="DialogTabNotification">2</span>
        <p className="DialogTabContent">{content}</p>
        <span className="DialogTabTime">{time}</span>
    </div>
)

export default DialogTab