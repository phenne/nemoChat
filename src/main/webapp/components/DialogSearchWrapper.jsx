import React from 'react'

const DialogSearchWrapper = ({onInputChange}) => (
    <div className="DialogSearchWrapper">
        <input type="text" placeholder="Поиск" onChange={(e) => {onInputChange(e.target.value)}}/>
    </div>
)

export default DialogSearchWrapper