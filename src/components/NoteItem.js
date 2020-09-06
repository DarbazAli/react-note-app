import React from 'react'

const NoteItem = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>
    )
}

export default NoteItem
