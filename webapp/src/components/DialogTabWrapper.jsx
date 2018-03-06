import React from 'react'
import PropTypes from 'prop-types'

import DialogTab from './DialogTab'
import DialogSearchWrapperContainer from '../containers/DialogSearchWrapperContainer'

const DialogTabWrapper = ({DialogTabs}) => (
    <div className="DialogTabWrapper">
        <DialogSearchWrapperContainer/>
            <div className="MessangingWrapperScroller">
                <button className="NewDialogButton">Найти собеседника</button>
                {DialogTabs.map((item, i) => ((<DialogTab key={i} {...item} />)))}
            </div>
    </div>
)

DialogTabWrapper.propTypes = {
    DialogTabs: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            time: PropTypes.instanceOf(Date).isRequired
        })
    )
}

export default DialogTabWrapper