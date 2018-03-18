import React from 'react'
import PropTypes from "prop-types";

class DialogTab extends React.Component {

    render() {
        let {author, content, time, id, checked, display} = this.props;

        let disp;

        if (display) {
            disp = {display: ''}
        } else {
            disp = {display: 'none'}
        }

        return (
            <div className="DialogTab" style={disp}>
                <p className="DialogTabName">{author}</p>
                <span className="DialogTabSettings"/>
                <span className="DialogTabNotification">2</span>
                <p className="DialogTabContent">{content}</p>
                <span className="DialogTabTime">{time.toLocaleTimeString()}</span>
            </div>
        )
    }
}

DialogTab.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired
}

export default DialogTab