import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Note, PreparationNote } from '../../types/Models';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deletePreparationNote } from '../../features/preparationNoteSlice';

interface PreparationNotesProps {
  preparationNotes: PreparationNote;
  onSavePreparation: (updatedPreparationNotes: Note[]) => void;
}

const PreparationNotes = ({
  preparationNotes,
  onSavePreparation,
}: PreparationNotesProps) => {
  const [editableNotes, setEditableNotes] = useState<Note[]>(
    preparationNotes?.notes || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [newNoteType, setNewNoteType] = useState('');
  const [showAddNoteInput, setShowAddNoteInput] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setEditableNotes(preparationNotes?.notes || []);
  }, [preparationNotes]);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditableNotes(preparationNotes?.notes || []);
    }
  };

  const handleNoteChange = (index: number, content: string) => {
    const updatedNotes = editableNotes.map((note, i) =>
      i === index ? { ...note, content } : note
    );
    setEditableNotes(updatedNotes);
  };

  const handleRemoveNote = (index: number) => {
    const updatedNotes = editableNotes.filter((_, i) => i !== index);

    const noteId = editableNotes[index].id;
    dispatch(deletePreparationNote(noteId));
    setEditableNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (newNoteType.trim() === '') return;
    const newNote: Note = {
      order: editableNotes.length + 1,
      type: newNoteType,
      content: '',
    };
    setEditableNotes([...editableNotes, newNote]);
    setNewNoteType('');
    setShowAddNoteInput(false);
  };

  const handleSave = () => {
    onSavePreparation(editableNotes);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableNotes(preparationNotes?.notes || []);
    setIsEditing(false);
  };

  return (
    <Box>
      {/* Class Preparation Heading and Edit Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Space between the heading and button
          alignItems: 'center',
          gap: 3,
          mb: 2,
        }}
      >
        <Typography variant="h5" color="textPrimary">
          Class Preparation
        </Typography>
        <Button
          variant="contained"
          color={isEditing ? 'primary' : 'secondary'}
          onClick={toggleEditMode}
        >
          {isEditing ? 'Cancel' : 'Edit Notes'}
        </Button>
      </Box>

      {/* Preparation Notes Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 3,
        }}
      >
        {editableNotes.length > 0 ? (
          editableNotes.map((note, index) => (
            <Box
              key={index}
              sx={{
                flexGrow: 1,
                backgroundColor: '#f3e5f5', // Weak purple background
                padding: '16px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" color="textSecondary">
                  {note.type} {/* The note name (immutable) */}
                </Typography>

                {/* Remove Icon Button */}
                {isEditing && (
                  <IconButton
                    color="error"
                    onClick={() => handleRemoveNote(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
              {isEditing ? (
                <TextField
                  value={note.content}
                  onChange={(e) => handleNoteChange(index, e.target.value)}
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  sx={{
                    backgroundColor: '#ffffff', // Lighter background inside the purple note box
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: '#ffffff',
                    padding: '16px',
                    borderRadius: '8px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {note.content || 'No content available.'}
                </Typography>
              )}
            </Box>
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{
              backgroundColor: '#f3e5f5', // Weak purple background for no notes message
              padding: '16px',
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              textAlign: 'center',
            }}
          >
            No preparation notes available.
          </Typography>
        )}
      </Box>

      {/* Add Note Section */}
      {isEditing && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 2,
          }}
        >
          {showAddNoteInput ? (
            <Box
              sx={{
                flexGrow: 1,
                backgroundColor: '#f3e5f5',
                padding: '16px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <TextField
                label="Note Name"
                variant="outlined"
                value={newNoteType}
                onChange={(e) => setNewNoteType(e.target.value)}
                fullWidth
                sx={{ backgroundColor: '#ffffff' }} // White background inside the purple note box
              />
              <IconButton color="primary" onClick={handleAddNote}>
                <AddIcon />
              </IconButton>
            </Box>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowAddNoteInput(true)}
            >
              Add Note
            </Button>
          )}
        </Box>
      )}

      {/* Save Button appears only in edit mode */}
      {isEditing && editableNotes.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Notes
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PreparationNotes;
