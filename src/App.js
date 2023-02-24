import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "Mon Mar 25 2023",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "Thu Feb 02 2023",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "Sat Feb 01 2023",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const onAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearch={setSearchText} />
      <NotesList
        notes={notes.filter((note)=>(note.text.toLowerCase().includes(searchText)))}
        handleAddNote={onAddNote}
        handleDeleteNote={onDeleteNote}
      />
    </div>
  );
};

export default App;
