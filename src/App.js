import React, { useState } from "react";
import { render } from "react-dom";

import Note from "./components/Note";
import NewNoteButton from "./components/NewNoteButton";
import NoteList from "./components/NoteList";

// import NoteItem from './NoteItem'

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
const list = JSON.parse(store.getItem("note_list"));

const App = () => {
  const [note, setNote] = useState(list[0].desc);

  const openNote = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <NewNoteButton />

      <NoteList notes={list} />
      <Note value={note} />
    </div>
  );
};

render(<App />, document.getElementById("root"));

