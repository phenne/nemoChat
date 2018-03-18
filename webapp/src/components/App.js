import React from 'react'

import '../styles/index.styl'
import '../styles/spinner.styl'
import '../styles/messangingPage.styl'

import DialogWrapper from './DialogWrapper'
import DialogTabWrapper from "./DialogTabWrapper";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="MessagingPage">
                    <div className="MessagingWrapper">
                        <DialogTabWrapper/>
                        <DialogWrapper/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App