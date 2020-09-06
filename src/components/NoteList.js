import React from 'react'
import NoteItem from './NoteItem'

const noteList = [
    {
      title: "Sample note #1",
      desc: "Note description #1",
      date: new Date().toDateString(),
    },

    {
        title: "Sample note #2",
        desc: "Note description #2",
        date: new Date().toDateString(),
      },
];

const store = window.localStorage;
store.setItem("note_list", JSON.stringify(noteList));


const NoteList = () => {
    const list = JSON.parse(store.getItem("note_list"));
    return (
        <div>
          {
              list.map( item => {
                  return <NoteItem key={item.title} title={item.title} date={item.date} />
              })
          }
        </div>
    )
}

export default NoteList









// console.log(list[0].title);