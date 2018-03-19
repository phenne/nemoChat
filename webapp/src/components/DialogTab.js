import React from 'react'
import PropTypes from "prop-types";

class DialogTab extends React.Component {

    render() {
        let {header, lastMessage, isUserMessage, unreadCount, display} = this.props;

        let disp;

        if (display) {
            disp = {display: ''}
        } else {
            disp = {display: 'none'}
        }

        return (
            <div className="DialogTab" style={disp}>
                <p className="DialogTabName">{header}</p>
                <span className="DialogTabSettings"/>
                <span className="DialogTabNotification">2</span>
                <p className="DialogTabContent">{lastMessage.messageText}</p>
                <span className="DialogTabTime">{lastMessage.creationDate}</span>
            </div>
        )
    }
}

// DialogTab.propTypes = {
//     author: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     // time: PropTypes.instanceOf(Date).isRequired
// }

export default DialogTab