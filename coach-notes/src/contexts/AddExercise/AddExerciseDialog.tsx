import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  selectEquipments,
  selectMusclesWorked,
} from '../../features/businessValuesSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface AddExerciseDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const AddExerciseDialog: React.FC<AddExerciseDialogProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const equipments = useAppSelector(selectEquipments);
  const musclesWorked = useAppSelector(selectMusclesWorked);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Exercise</DialogTitle>
      <DialogContent>
        <TextField
          label="Exercise Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Aliases (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Points of Performance (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="equipments-label">Equipments</InputLabel>
          <Select
            labelId="equipments-label"
            label="Equipments"
            multiple
            value={[]}
            onChange={() => {}}
          >
            {equipments.map((equipment) => (
              <MenuItem key={equipment} value={equipment}>
                {equipment}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="muscles-worked-label">Muscles Worked</InputLabel>
          <Select
            labelId="muscles-worked-label"
            label="Muscles Worked"
            multiple
            value={[]}
            onChange={() => {}}
          >
            {musclesWorked.map((muscle) => (
              <MenuItem key={muscle} value={muscle}>
                {muscle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Video URL"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onAdd} color="primary" variant="contained">
          Add Exercise
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExerciseDialog;
