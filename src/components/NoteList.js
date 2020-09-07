import React from 'react'
import NoteItem from "./NoteItem";

const NoteList = ({notes}) => {
    return (
        <div>
          {
              notes.map( item => {
                  return <NoteItem 
                            key={item.title} 
                            title={item.title} 
                            date={item.date} 
                        />
              })
          }
        </div>
    )
}

export default NoteList
