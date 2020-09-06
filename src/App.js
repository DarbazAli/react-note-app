import React from "react";
import { render } from "react-dom";
import Note from './components/Note';

const App = () => {
  return (
    <div>
      <Note />
    </div>
  );
};

render(<App />, document.getElementById("root"));
