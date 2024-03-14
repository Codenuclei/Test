import React, { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <AddNoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
