import React from 'react'

import DialogBox from './DialogBox'
import MessageBox from './MessageBox'

class DialogWrapper extends React.Component {

    render() {
        return (
            <div className="DialogWrapper">

                <DialogBox/>
                <MessageBox/>

                {/*<Notification/>*/}

                {/*<Spinner/>*/}

            </div>
        )
    }
}

export default DialogWrapper