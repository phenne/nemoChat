import React from 'react'

import '../styles/index.styl'
import '../styles/spinner.styl'
import '../styles/messangingPage.styl'

import DialogTabWrapperContainer from '../containers/DialogTabWrapperContainer'
import DialogWrapper from './DialogWrapper'

const App = () => (
    <div className="App">
        <div className="MessangingPage">
            <div className="MessangingWrapper">
                <DialogTabWrapperContainer/>
                <DialogWrapper/>
            </div>
        </div>
    </div>
)

export default App