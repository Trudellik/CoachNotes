import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';
import { Note } from '../../types/Models';
import { generateUUID } from '../../utils/idGeneratorUtil';

interface AddNoteComponentProps {
  onSaveNote: (newNote: Note) => void;
  onSkipNote: () => void;
}

const AddNoteComponent: React.FC<AddNoteComponentProps> = ({
  onSaveNote,
  onSkipNote,
}) => {
  const [noteType, setNoteType] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSave = () => {
    if (noteType.trim() === '') {
      setValidationMessage(
        'Note type cannot be empty. Please enter a valid type.'
      );
      return;
    }

    const newNote: Note = {
      id: generateUUID(),
      order: 1,
      type: noteType,
      content: '',
    };

    onSaveNote(newNote);
    setNoteType('');
    setValidationMessage('');
  };

  useEffect(() => {
    if (noteType.trim() !== '') {
      setValidationMessage('');
    }
  }, [noteType]);

  return (
    <div
      style={{
        backgroundColor: '#f3e5f5',
        padding: '16px',
        paddingRight: '4px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Note Type"
          variant="outlined"
          value={noteType}
          onChange={(e) => setNoteType(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSave();
            }
          }}
          fullWidth
          autoFocus
          sx={{ backgroundColor: '#ffffff' }}
        />
        <IconButton color="primary" onClick={handleSave}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <IconButton color="error" onClick={onSkipNote}>
          <HighlightOffIcon fontSize="large" />
        </IconButton>
      </div>
      {validationMessage && (
        <Typography
          variant="body2"
          color="error"
          sx={{ marginTop: '8px', textAlign: 'left' }}
        >
          {validationMessage}
        </Typography>
      )}
    </div>
  );
};

export default AddNoteComponent;
