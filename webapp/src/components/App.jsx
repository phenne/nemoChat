import React from 'react'

import '../styles/index.styl'
import '../styles/spinner.styl'
import '../styles/messangingPage.styl'

import DialogWrapper from './DialogWrapper'
import DialogTabWrapper from './DialogTabWrapper'

const App = () => (
    <div className="App">
        <div className="MessangingPage">
            <div className="MessangingWrapper">
                <DialogTabWrapper/>
                <DialogWrapper/>
            </div>
        </div>
    </div>
)

export default App