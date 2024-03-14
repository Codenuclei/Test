import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddNoteForm({ addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addNote({ id: uuidv4(), text: noteText });
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNoteForm;
