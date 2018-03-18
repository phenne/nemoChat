import { combineReducers } from 'redux'

import {
    CHOOSE_DIALOG,
    CHOOSE_MESSAGE,
    DISCONNECT,
    FORWARD,
    REPLY,
    REPORT,
    SEARCH_DIALOG,
    SEND_MESSAGE,
    NEW_DIALOG
} from '../actions'

function dialogs (state = [], action) {
    switch (action.type) {
        case SEARCH_DIALOG:
            return searchDialogReduce(state, action)
        default:
            return state
    }
}

function searchDialogReduce(state, action) {
    let new_dialogs = [...state];
    new_dialogs.map((item, index, arr) => {
        item.display = !item.author.toLowerCase().indexOf(action.searchString.toLowerCase());
    });
    return new_dialogs
}

const appReducer = combineReducers({
    dialogs
})

export default appReducer