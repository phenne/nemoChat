import React from 'react'

const DialogBox = () => (
    <div className="DialogBox">
        <div className="DialogBoxInner">
            <div className="DialogBoxInnerFixer">

                <div className="DialogBoxHeader">
                    <input type="text" defaultValue="Аноним" placeholder="Назовите своего анонима"/>
                    <div className="DialogBoxHeaderButtonsWrapper">
                        <button className="Disconnect">Отключиться</button>
                        <button className="Report">Пожаловаться</button>
                    </div>
                </div>

                <div className="ReplicasWrapper">
                    <div className="DialogReplica interlocutor choosed">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica interlocutor">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DateDivider">
                        <span>14 Декабря, 2018</span>
                    </div>
                    <div className="DialogReplica user">
                        <span className="DialogReplicaIdentifier">Вы</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica interlocutor">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica interlocutor">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica interlocutor">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica user">
                        <span className="DialogReplicaIdentifier">Вы</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                    <div className="DialogReplica interlocutor">
                        <span className="DialogReplicaIdentifier">Собеседник</span>
                        <span className="DialogReplicaContent">Привет</span>
                        <span className="DialogReplicaSendTime">14:32</span>
                        <div className="DialogReplicaChoosed"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default DialogBox