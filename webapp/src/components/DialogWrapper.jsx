import React from 'react'

import DialogBox from './DialogBox'
import MessageBox from './MessageBox'
import Notification from "./Notification";
import Spinner from "./Spinner"

const DialogWrapper = () => (
    <div className="DialogWrapper">


        <DialogBox/>
        <MessageBox/>

        {/*<Notification/>*/}

        {/*<Spinner/>*/}


    </div>
)

export default DialogWrapper