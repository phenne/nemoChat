import React from 'react'

const DialogTabWrapper = () => (
    <div className="DialogTabWrapper">
        <div className="DialogSearchWrapper">
            <input type="text" placeholder="Поиск"/>
        </div>

        <div className="MessangingWrapperScroller">
            <button className="NewDialogButton">Найти собеседника</button>

            <div className="DialogTab">
                <p className="DialogTabName">Аноним</p>
                <span className="DialogTabSettings"></span>
                <p className="DialogTabContent">Последнее сообщение</p>
                <span className="DialogTabTime">14:12</span>
            </div>
        </div>

    </div>
)

export default DialogTabWrapper