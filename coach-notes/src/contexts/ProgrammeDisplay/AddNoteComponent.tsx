import React, { useState } from 'react';
import { Note } from '../../types/Models';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import { generateUUID } from '../../utils/idGeneratorUtil';

interface AddNoteComponentProps {
  onSaveNote: (newNote: Note) => void;
  onSkipNote: () => void;
}

const AddNoteComponent = ({
  onSaveNote,
  onSkipNote,
}: AddNoteComponentProps) => {
  const [newNoteType, setNewNoteType] = useState<string>('');
  const [newNoteContent, setNewNoteContent] = useState<string>('');

  const handleAddNote = () => {
    if (!newNoteType.trim()) {
      return;
    }

    const newNote: Note = {
      id: generateUUID(),
      order: 1,
      type: newNoteType,
      content: newNoteContent,
    };

    onSaveNote(newNote);

    setNewNoteType('');
    setNewNoteContent('');
  };

  return (
    <div
      style={{
        backgroundColor: '#f3e5f5',
        padding: '16px',
        paddingRight: '4px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
      }}
    >
      <TextField
        label="Note Name"
        variant="outlined"
        value={newNoteType}
        onChange={(e) => setNewNoteType(e.target.value)}
        fullWidth
        sx={{ backgroundColor: '#ffffff' }}
      />

      <IconButton color="primary" onClick={handleAddNote}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <IconButton color="error" onClick={onSkipNote}>
        <HighlightOffIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default AddNoteComponent;
