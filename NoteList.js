import React from 'react';

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );
}

export default NoteList;
