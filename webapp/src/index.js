import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import App from './components/App'
import appReducer from './reducers'
import * as axios from 'axios'


let state = {
    dialogWrapper: {
        author: "checked",
        messages: [
            {
                author: false,
                text: "text...",
                time: new Date(),
                files: undefined,
                audio: undefined
            },
            {
                author: true,
                text: "text...",
                time: new Date(),
                files: undefined,
                audio: undefined
            },
            {
                author: false,
                text: "text...",
                time: new Date(),
                files: undefined,
                audio: undefined
            },
            {
                author: true,
                text: "text...",
                time: new Date(),
                files: undefined,
                audio: undefined
            },
        ]
    }
}

let store

async function configureState() {

    const dialogTabsResponse = await getDialogTabs();
    state.dialogs = dialogTabsResponse.data;
    state.dialogs.forEach(item => {
        item.display = true
    })
}

configureState().then(() => {
    console.log(state)
    store = createStore(appReducer, state)

    render(
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
})


async function getDialogTabs() {
    return axios.get("/dialogTab/andrey")
}
