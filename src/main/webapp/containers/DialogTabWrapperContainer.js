import { connect } from 'react-redux'
import DialogTabWrapper from '../components/DialogTabWrapper'

const mapStateToProps = state => {
    return {
        DialogTabs: state.dialogs
    }
}

const DialogTabWrapperContainer = connect(
    mapStateToProps,
    null
)(DialogTabWrapper)

export default DialogTabWrapperContainer