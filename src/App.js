import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";
// import useDebounce from "./hooks/useDebounce";

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
  const [darkMode, setDarkMode] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState(searchText);

  // const debouncedSearch = useDebounce(searchText, 500);
  
  useEffect(() => {
    if (searchText) {
      const handler = setTimeout(() => {
        setDebouncedValue(searchText);
      }, 2000);
      return () => {
        clearTimeout(handler);
      };
    } else {
      return;
    }
  }, [searchText]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
      // console.log(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(debouncedValue)
          )}
          handleAddNote={onAddNote}
          handleDeleteNote={onDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;
