import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import {  AppContainer } from 'react-hot-loader'
import appReducer from './reducers'

import { createStore } from 'react-redux'

let store = createStore(appReducer)

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

