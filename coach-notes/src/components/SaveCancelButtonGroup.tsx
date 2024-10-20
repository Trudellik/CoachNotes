import React from 'react';
import Button from '@mui/material/Button';

interface SaveCancelButtonGroupProps {
  onSave: () => void;
  onCancel: () => void;
}

const SaveCancelButtonGroup = ({
  onSave,
  onCancel,
}:SaveCancelButtonGroupProps) => {
  return (
    <>
      <Button variant="contained" color="primary" onClick={onSave}>
        Save
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        sx={{ marginLeft: '8px' }}
      >
        Cancel
      </Button>
    </>
  );
};

export default SaveCancelButtonGroup;
