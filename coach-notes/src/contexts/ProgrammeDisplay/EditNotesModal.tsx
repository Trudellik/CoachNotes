import React, { useState, useEffect, useRef } from 'react';
import { Note } from '../../types/Models';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';

interface PreparationNoteModalProps {
  open: boolean;
  onClose: () => void;
  preparationNotes: Note[];
  onSavePreparation: (updatedNotes: Note[]) => void;
}

const EditNotesModal = ({
  open,
  onClose,
  preparationNotes,
  onSavePreparation,
}: PreparationNoteModalProps) => {
  const [localNotes, setLocalNotes] = useState<Note[]>(preparationNotes);

  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const noteTypeRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(localNotes) !== JSON.stringify(preparationNotes);
    setIsSaveDisabled(!hasChanges);
  }, [localNotes, preparationNotes]);

  const handleAddNote = () => {
    const newNote: Note = {
      order: localNotes.length + 1,
      type: '',
      content: '',
    };

    setLocalNotes([...localNotes, newNote]);
    noteTypeRefs.current.push(null);
    const lastRef = noteTypeRefs.current[noteTypeRefs.current.length - 1];
    if (lastRef) lastRef.focus();
  };

  const handleRemoveNote = (index: number) => {
    const updatedNotes = localNotes
      .filter((_, i) => i !== index)
      .map((note, i) => ({ ...note, order: i + 1 }));

    setLocalNotes(updatedNotes);
  };

  const handleNoteChange = (
    index: number,
    field: keyof Note,
    value: string
  ) => {
    const updatedNotes = [...localNotes];
    updatedNotes[index] = { ...updatedNotes[index], [field]: value };

    setLocalNotes(updatedNotes);
  };

  const handleSave = () => {
    onSavePreparation(localNotes);
    onClose();
  };

  const handleCancel = () => {
    const filteredNotes = localNotes.filter(
      (note) => note.type.trim() !== '' || note.content.trim() !== ''
    );
    setLocalNotes(filteredNotes);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Prepare Class
        </Typography>

        {localNotes.map((note, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
          >
            <TextField
              label="Note Type"
              value={note.type}
              onChange={(e) => handleNoteChange(index, 'type', e.target.value)}
              inputRef={(el) => (noteTypeRefs.current[index] = el)}
              fullWidth
              sx={{ mr: 2 }}
            />
            <TextField
              label="Content"
              value={note.content}
              onChange={(e) =>
                handleNoteChange(index, 'content', e.target.value)
              }
              fullWidth
              multiline
            />
            <IconButton onClick={() => handleRemoveNote(index)} color="error">
              <RemoveCircleOutline />
            </IconButton>
          </Box>
        ))}

        <Button
          onClick={handleAddNote}
          startIcon={<AddCircleOutline />}
          variant="outlined"
          sx={{ mb: 2 }}
        >
          Add Note
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            disabled={isSaveDisabled} // Disable Save button if no changes
          >
            Save
          </Button>
          <Button
            onClick={handleCancel}
            variant="outlined"
            color="secondary"
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditNotesModal;
