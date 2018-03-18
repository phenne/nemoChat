import React from 'react'

class DialogBoxHeader extends React.Component {

    render() {
        return (
            <div className="DialogBoxHeader">
                <input type="text" defaultValue="Аноним" placeholder="Назовите своего анонима"/>
                <div className="DialogBoxHeaderButtonsWrapper">
                    <button className="Disconnect">Отключиться</button>
                    <button className="Report">Пожаловаться</button>
                    {/*<button className="Forward">Переслать</button>*/}
                    {/*<button className="Reply">Ответить</button>*/}
                </div>
            </div>
        )
    }
}

export default DialogBoxHeader