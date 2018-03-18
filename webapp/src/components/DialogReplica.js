import React from 'react'

class DialogReplica extends React.Component {

    render() {
        let {content, identifier, time} = this.props;
        let author =  identifier ? "interlocutor" : "user";

        if (!identifier)
            identifier = "Вы"

        return (
            <div className={"DialogReplica " + author}>
                <span className="DialogReplicaIdentifier">{identifier}</span>
                <span className="DialogReplicaContent">{content}</span>
                <span className="DialogReplicaSendTime">{time}</span>
                <div className="DialogReplicaChosen"/>
            </div>
        )
    }
}

export default DialogReplica