import React from 'react'
import PropTypes from "prop-types";

const DialogTab = ({author, content, time, id, checked, display}) => {

    let disp;

    if (display) {
        disp = {display: ''}
    } else {
        disp = {display: 'none'}
    }

    return (
        <div className="DialogTab" style={disp}>
        <p className="DialogTabName">{author}</p>
         <span className="DialogTabSettings"></span>
         <span className="DialogTabNotification">2</span>
         <p className="DialogTabContent">{content}</p>
         <span className="DialogTabTime">{time.toLocaleTimeString()}</span>
        </div>
    )

}


DialogTab.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired
}

export default DialogTab