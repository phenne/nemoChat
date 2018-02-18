import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import {  AppContainer } from 'react-hot-loader'

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
)