import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useEffect, useRef, useState } from 'react';
import { Programme } from '../../types/Models';
import { Dayjs } from 'dayjs';
import { generateUUID } from '../../utils/idGeneratorUtil';

type AddProgrammeDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (programme: Programme) => void;
};

const AddProgrammeDialog: React.FC<AddProgrammeDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  // Local state to manage the form inputs
  const [programme, setProgramme] = useState<Omit<Programme, 'id'>>({
    name: '',
    date: null,
    programme: '',
    attentionNote: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    date: false,
    programme: false,
    attentionNote: false,
  });

  const classNameRef = useRef<HTMLInputElement>(null);
  const programmeRef = useRef<HTMLInputElement>(null);
  const attentionNoteRef = useRef<HTMLInputElement>(null);

  // Set focus on the first empty field when the dialog fully opens
  const handleFocusOnOpen = () => {
    if (!programme.name && classNameRef.current) {
      classNameRef.current.focus();
    } else if (!programme.programme && programmeRef.current) {
      programmeRef.current.focus();
    } else if (!programme.attentionNote && attentionNoteRef.current) {
      attentionNoteRef.current.focus();
    }
  };

  // Handlers for each input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProgramme((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false })); // Reset error state when user types
  };

  const handleDateChange = (date: Dayjs | null) => {
    setProgramme((prev) => ({ ...prev, date }));
    setErrors((prev) => ({ ...prev, date: false })); // Reset error state for date
  };

  const handleSubmit = () => {
    // Validation: check if any required fields are empty
    const hasErrors = {
      name: !programme.name,
      date: !programme.date,
      programme: !programme.programme,
      attentionNote: !programme.attentionNote,
    };

    setErrors(hasErrors); // Set error state for each field

    // If any field has an error, block submission
    if (
      hasErrors.name ||
      hasErrors.date ||
      hasErrors.programme ||
      hasErrors.attentionNote
    ) {
      return;
    }

    // All fields are filled, proceed with submission
    const newProgramme: Programme = {
      ...programme,
      id: generateUUID(),
    };
    onSubmit(newProgramme);
    onClose();
  };

  // Reset all inputs and errors when the cancel button is clicked
  const handleCancel = () => {
    setErrors({
      name: false,
      date: false,
      programme: false,
      attentionNote: false,
    });
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel} // Reset errors and inputs when the dialog is closed
      aria-labelledby="add-programme-dialog-title"
      TransitionProps={{
        onEntered: handleFocusOnOpen, // Set focus after the dialog has fully entered the DOM
      }}
    >
      <DialogTitle id="add-programme-dialog-title">Add Programme</DialogTitle>
      <DialogContent>
        <TextField
          inputRef={classNameRef}
          margin="dense"
          id="name"
          name="name"
          label="Programme Name"
          type="text"
          fullWidth
          required
          value={programme.name}
          onChange={handleInputChange}
          error={errors.name} // Show error state if name is empty
          helperText={errors.name ? 'Programme name is required' : ''}
        />
        <TextField
          inputRef={programmeRef}
          margin="dense"
          id="programme"
          name="programme"
          label="Programme"
          type="text"
          fullWidth
          multiline
          rows={3}
          required
          value={programme.programme}
          onChange={handleInputChange}
          error={errors.programme} // Show error state if programme is empty
          helperText={errors.programme ? 'Programme is required' : ''}
        />
        <DatePicker
          label={
            <span>
              Date <span style={{ color: 'gray' }}>*</span>
            </span>
          }
          value={programme.date}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              fullWidth
              margin="dense"
              error={errors.date} // Show an error if the date is missing
              helperText={errors.date ? 'Date is required' : ''}
            />
          )}
        />
        <TextField
          inputRef={attentionNoteRef}
          margin="dense"
          id="attentionNote"
          name="attentionNote"
          label="Attention Note"
          type="text"
          fullWidth
          value={programme.attentionNote}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProgrammeDialog;
