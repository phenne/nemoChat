export const CHOOSE_DIALOG = 'CHOOSE_DIALOG',
             CHOOSE_MESSAGE = 'CHOOSE_MESSAGE',
             DISCONNECT = 'DISCONNECT',
             FORWARD = 'FORWARD',
             REPLY = 'REPLY',
             REPORT = 'REPORT',
             SEARCH_DIALOG = 'SEARCH_DIALOG',
             SEND_MESSAGE = 'SEND_MESSAGE',
             NEW_DIALOG = 'NEW_DIALOG';



export const chooseDialog = id => ({
    type: CHOOSE_DIALOG,
    id
})

export const chooseMessages = () => ({
    type: CHOOSE_MESSAGE
})

export const disconnect = () => ({
    type: DISCONNECT
})

export const forward = () => ({
    type: FORWARD
})

export const reply = () => ({
    type: REPLY
})

export const report = () => ({
    type: REPORT
})

export const searchDialog = (searchString) => ({
        type: SEARCH_DIALOG,
        searchString
})