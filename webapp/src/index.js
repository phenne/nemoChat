import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'
import appReducer from './reducers'


let state = {
    dialogs: [
        {
            author: "Pascal",
            content: "message text...",
            time: new Date(),
            id: 1,
            checked: false,
            display: true
        },
        {
            author: "Sockrat",
            content: "message text...",
            time: new Date(),
            id: 2,
            checked: true,
            display: true
        },
        {
            author: "Dijkstra",
            content: "message text...",
            time: new Date(),
            id: 2,
            checked: false,
            display: true
        }
    ],
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

let store = createStore(appReducer, state);

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
     </AppContainer>,
    document.getElementById('root')
)

