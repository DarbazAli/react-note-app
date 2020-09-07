import React from 'react'

const Note = ({value}) => {
    return (
        <textarea defaultValue={value} className="note_editor"/>
    )
}

export default Note
