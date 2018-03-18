import React from 'react'

class DateDivider extends React.Component {

    render() {
        const time = this.props.time;
        return (
            <div className="DateDivider">
                <span>{time}</span>
            </div>
        )
    }
}

export default DateDivider