import React from 'react'

import DialogTab from './DialogTab'

const DialogTabWrapper = () => (
    <div className="DialogTabWrapper">
        <div className="DialogSearchWrapper">
            <input type="text" placeholder="Поиск"/>
        </div>

        <div className="MessangingWrapperScroller">
            <button className="NewDialogButton">Найти собеседника</button>

            <DialogTab author="Пушкин" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Гарри" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Аноним" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Путин" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Стив Роджерс" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Илон Маск" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Наруто" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Навальный" content="Последнее сообщение..." time="14:12"/>
            <DialogTab author="Довакин" content="Последнее сообщение..." time="14:12"/>
        </div>

    </div>
)

export default DialogTabWrapper