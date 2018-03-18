import React from 'react'
import {searchDialog} from "../actions";
import {connect} from "react-redux";

class DialogSearchWrapper extends React.Component {

    render() {
        const onInputChange = this.props.onInputChange;

        return (
            <div className="DialogSearchWrapper">
                <input type="text" placeholder="Поиск" onChange={e => onInputChange(e.target.value)}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: searchString => {
            dispatch(searchDialog(searchString))
        }
    }
}

export default connect(null, mapDispatchToProps)(DialogSearchWrapper)