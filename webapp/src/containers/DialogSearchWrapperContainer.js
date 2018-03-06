import { connect } from 'react-redux'
import DialogSearchWrapper from '../components/DialogSearchWrapper'
import { searchDialog } from '../actions'


const mapDispatchToProps = dispatch => {
    return {
        onInputChange: string => {
            dispatch(searchDialog(string))
        }
    }
}

const DialogSearchWrapperContainer = connect(
    null,
    mapDispatchToProps
)(DialogSearchWrapper)

export default DialogSearchWrapperContainer