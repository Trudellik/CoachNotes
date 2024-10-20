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
  onSavePreparation,
  onCancelPreparation,
}: PreparationNotesProps) => {
  const [editableNotes, setEditableNotes] = useState<Note[]>(
    preparationNotes?.notes || []
  );
  const [showAddNoteInput, setShowAddNoteInput] = useState<boolean>(false);
  const [focusedNoteId, setFocusedNoteId] = useState<string | null>(null);

  useEffect(() => {
    if (isEditMode && editableNotes.length === 0) {
      setShowAddNoteInput(true);
    } else {
      setShowAddNoteInput(false);
    }
  }, [isEditMode, editableNotes.length]);

  const handleNoteChange = (id: string, content: string) => {
    setEditableNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const handleAddNote = (newNote: Note) => {
    setEditableNotes((prevNotes) => [...prevNotes, newNote]);
    setShowAddNoteInput(false);
    setFocusedNoteId(newNote.id); // Set the new note to be focused
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

      {/* Display existing notes if available */}
      {editableNotes.length > 0 ? (
        editableNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            isEditMode={isEditMode}
            handleRemoveNote={handleRemoveNote}
            handleNoteChange={handleNoteChange}
            autoFocus={note.id === focusedNoteId} // Autofocus on the new note
          />
        ))
      ) : (
        // Show the placeholder message only if `AddNoteComponent` is not visible
        !showAddNoteInput && (
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
        )
      )}

      {/* If in edit mode, show the AddNoteComponent or Add Note Button based on `showAddNoteInput` */}
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
            sx={{ marginTop: '16px' }}
          >
            Add Note
          </Button>
        ))}
    </>
  );
};

export default PreparationNotes;
