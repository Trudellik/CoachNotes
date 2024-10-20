import React, { useState } from 'react';
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
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

interface AddExerciseDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (exercise: any) => void;
}

const AddExerciseDialog: React.FC<AddExerciseDialogProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const equipments = useAppSelector(selectEquipments);
  const musclesWorked = useAppSelector(selectMusclesWorked);
  const [exerciseName, setExerciseName] = useState('');
  const [aliases, setAliases] = useState('');
  const [pointsOfPerformance, setPointsOfPerformance] = useState('');
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleEquipmentsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedEquipments(event.target.value as string[]);
  };

  const handleMusclesChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedMuscles(event.target.value as string[]);
  };

  const resetFields = () => {
    setExerciseName('');
    setAliases('');
    setPointsOfPerformance('');
    setSelectedEquipments([]);
    setSelectedMuscles([]);
    setVideoUrl('');
    setImageUrl('');

    onClose();
  };

  const handleAddExercise = () => {
    const newExercise = {
      name: exerciseName,
      alias: aliases.split(',').map((alias) => alias.trim()),
      pointOfPerformance: pointsOfPerformance
        .split(',')
        .map((point) => point.trim()),
      equipments: selectedEquipments,
      muscleWorked: selectedMuscles,
      videoUrl,
      previewImage: imageUrl,
    };
    onAdd(newExercise);
    resetFields();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Exercise</DialogTitle>
      <DialogContent>
        <TextField
          label="Exercise Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <TextField
          label="Aliases (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={aliases}
          onChange={(e) => setAliases(e.target.value)}
        />
        <TextField
          label="Points of Performance (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={pointsOfPerformance}
          onChange={(e) => setPointsOfPerformance(e.target.value)}
        />
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="equipments-label">Equipments</InputLabel>
          <Select
            labelId="equipments-label"
            label="Equipments"
            multiple
            value={selectedEquipments}
            onChange={handleEquipmentsChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
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
            value={selectedMuscles}
            onChange={handleMusclesChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
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
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            resetFields();
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={handleAddExercise} color="primary" variant="contained">
          Add Exercise
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExerciseDialog;
