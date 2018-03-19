import React from 'react'
import PropTypes from 'prop-types'

import DialogTab from './DialogTab'
import DialogSearchWrapper from "./DialogSearchWrapper";
import {connect} from "react-redux";

class DialogTabWrapper extends React.Component {

    render() {
        const dialogTabs = this.props.dialogTabs
        return (
            <div className="DialogTabWrapper">
                <DialogSearchWrapper/>
                <div className="MessagingWrapperScroller">
                    <button className="NewDialogButton">Найти собеседника</button>
                    {dialogTabs.map((item, i) => (<DialogTab key={i} {...item}/>))}
                </div>
            </div>
        )
    }
}

DialogTabWrapper.propTypes = {
    DialogTabs: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            // time: PropTypes.instanceOf(Date).isRequired
        })
    )
}

const mapStateToProps = state => {
    return {
        dialogTabs: state.dialogs
    }
}

export default connect(mapStateToProps)(DialogTabWrapper)