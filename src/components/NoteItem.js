import React from 'react'

const NoteItem = (props) => {
    return (
        <div className="note-item">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>
    )
}

export default NoteItem
