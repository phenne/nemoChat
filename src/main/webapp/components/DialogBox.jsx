import React from 'react'

import DialogBoxHeader from './DialogBoxHeader'
import DialogReplica from './DialogReplica'
import DataDivider from './DataDivider'

const DialogBox = () => (
    <div className="DialogBox">
        <div className="DialogBoxInner">
            <div className="DialogBoxInnerFixer">

                <DialogBoxHeader/>

                <div className="ReplicasWrapper">
                    <DialogReplica content="Привет" time="14:32" identifier="Собеседник"/>
                    <DataDivider time="14 Декабря, 2018"/>
                    <DialogReplica content="Привет" time="14:32"/>
                    <DialogReplica content="Gdsds" time="14:21" identifier="Собеседник"/>
                    <DataDivider time="18 Декабря, 2018"/>
                    <DialogReplica content="dsfsdlfsdkfsjdklf" time="14:32"/>
                    <DialogReplica content="dsfsdlfsdkfsjdklf" time="14:32"/>
                    <DialogReplica content="dsfsdlfsdkfsjdklf" time="14:32"/>
                    <DialogReplica content="dsfsdlfsdkfsjdklf" time="14:32"/>
                    <DialogReplica content="dsfsdlfsdkfsjdklf" time="14:32"/>
                </div>
            </div>
        </div>
    </div>
)

export default DialogBox