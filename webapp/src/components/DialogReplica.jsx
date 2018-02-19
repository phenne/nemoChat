import React from 'react'

const DialogReplica = ({content, identifier, time}) => {

    let author =  identifier ? "interlocutor" : "user";

    if (!identifier)
        identifier = "Вы"

    return (
        <div className={"DialogReplica " + author}>
            <span className="DialogReplicaIdentifier">{identifier}</span>
            <span className="DialogReplicaContent">{content}</span>
            <span className="DialogReplicaSendTime">{time}</span>
            <div className="DialogReplicaChoosed"></div>
        </div>
    )
}

export default DialogReplica