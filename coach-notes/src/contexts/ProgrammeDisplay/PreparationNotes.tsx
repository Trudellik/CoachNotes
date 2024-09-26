import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Note, PreparationNote } from '../../types/Models';
import NoteItem from './NoteItem';
import AddNoteComponent from './AddNoteComponent';
import Button from '@mui/material/Button';

interface PreparationNotesProps {
  preparationNotes: PreparationNote;
  isEditMode: boolean;
  onSavePreparation: (updatedPreparationNotes: Note[]) => void;
  onCancelPreparation: () => void;
}

const PreparationNotes = ({
  preparationNotes,
  isEditMode,
}: PreparationNotesProps) => {
  const [editableNotes, setEditableNotes] = useState<Note[]>(
    preparationNotes?.notes || []
  );
  const [showAddNoteInput, setShowAddNoteInput] = useState<boolean>(false);

  const handleNoteChange = (id: string, content: string) => {
    setEditableNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const handleAddNote = (newNote: Note) => {
    setEditableNotes((prevNotes) => [...prevNotes, newNote]);
    setShowAddNoteInput(false);
  };

  const handleSkipNewNote = () => {
    setShowAddNoteInput(false);
  };

  const handleRemoveNote = (id: string) => {
    setEditableNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  return (
    <>
      <Typography variant="h6" color="textPrimary" sx={{ mb: 2 }}>
        Notes:
      </Typography>

      {editableNotes.length > 0 ? (
        editableNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            isEditMode={isEditMode}
            handleRemoveNote={handleRemoveNote}
            handleNoteChange={handleNoteChange}
          />
        ))
      ) : (
        <Typography
          variant="body1"
          sx={{
            backgroundColor: '#fce4ec',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '16px',
            fontStyle: 'italic',
          }}
        >
          Hmm... looks like there aren't any notes yet. <br />
          Want to add one?
        </Typography>
      )}

      {isEditMode &&
        (showAddNoteInput ? (
          <AddNoteComponent
            onSaveNote={handleAddNote}
            onSkipNote={handleSkipNewNote}
          />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAddNoteInput(true)}
          >
            Add Note
          </Button>
        ))}
    </>
  );
};

export default PreparationNotes;
