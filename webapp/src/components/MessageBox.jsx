import React from 'react'


const MessageBox = () => (
    <div className="MessageBox">
        <div className="MessageBoxInner">
            <div className="MessageEditor" contentEditable="true" role="textbox"></div>
            <button className="AudioMessageButton">Au</button>
            <button className="EmojiButton">Em</button>
            <button className="AddFilesButton">Fl</button>
            <button className="SendMessageButton">Sn</button>
        </div>
    </div>
)

export default MessageBox