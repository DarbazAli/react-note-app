import React from "react";
import { render } from "react-dom";
import Note from "./components/Note";
import NewNoteButton from "./components/NewNoteButton";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <div>
      <NewNoteButton />
      {/* <Note /> */}
      <NoteList />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const noteList = [
//   {
//     title: "Note #1",
//     desc: "Note description #1",
//     date: new Date(),
//   },
// ];
// const store = window.localStorage;

// store.setItem("note_list", JSON.stringify(noteList));

// const list = JSON.parse(store.getItem("note_list"));

// console.log(list[0].title);
