import React from 'react'

import '../styles/index.styl'
import '../styles/spinner.styl'
import '../styles/messangingPage.styl'


const App = () => (
    <div className="App">


        <div className="MessangingPage">

            <div className="MessangingWrapper">
                <div className="DialogTabWrapper">
                    <div className="DialogSearchWrapper">
                        <input type="text" placeholder="Поиск"/>
                    </div>

                    <button className="NewDialogButton">Найти собеседника</button>

                    <div className="DialogTab"></div>
                    <div className="DialogTab"></div>
                    <div className="DialogTab"></div>
                    <div className="DialogTab"></div>
                </div>

                <div className="DialogWrapper">
                    <div className="DialogBox">

                        {/*<div className="NoDialogsNotification">*/}
                            {/*<p>У вас нет ни одного диалога</p>*/}
                        {/*</div>*/}

                        <div className="DialogBoxHeader">
                            <input type="text" defaultValue="Аноним"/>
                        </div>

                        <div className="ReplicasWrapper">
                            <div className="DialogReplica interlocutor choosed">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica interlocutor">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica user">
                                <span className="DialogReplicaIdentifier">Вы</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica interlocutor">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica interlocutor">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica interlocutor">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica user">
                                <span className="DialogReplicaIdentifier">Вы</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                            <div className="DialogReplica interlocutor">
                                <span className="DialogReplicaIdentifier">Собеседник</span>
                                <span className="DialogReplicaContent">Привет</span>
                            </div>
                        </div>


                        {/*<div className="SpinnerWrapper">*/}
                            {/*<span className="Spinner"></span>*/}
                        {/*</div>*/}

                    </div>

                    <div className="MessageBox">
                        <div className="MessageEditor" contentEditable="true"></div>
                        <button className="SendMessageButton">Отправить</button>
                    </div>
                </div>
            </div>


        </div>


    </div>
)

export default App