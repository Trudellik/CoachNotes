import React from 'react';
import Button from '@mui/material/Button';
import SaveCancelButtonGroup from './SaveCancelButtonGroup';
import { Note } from '../types/Models';

interface NotesActionButtonsProps {
  hasPreparationNotes: boolean;
  isEditMode: boolean;
  editableNotes: Note[];
  onSave: () => void;
  onCancel: () => void;
  onCreate: () => void;
  onEdit: () => void;
}

const NotesActionButtons = ({
  hasPreparationNotes,
  isEditMode,
  onSave,
  onCancel,
  onCreate,
  onEdit,
}: NotesActionButtonsProps) => {
  if (isEditMode) {
    return <SaveCancelButtonGroup onSave={onSave} onCancel={onCancel} />;
  }

  return hasPreparationNotes ? (
    <Button variant="contained" color="primary" onClick={onEdit}>
      Edit Notes
    </Button>
  ) : (
    <Button variant="contained" color="primary" onClick={onCreate}>
      Create Notes
    </Button>
  );
};

export default NotesActionButtons;
