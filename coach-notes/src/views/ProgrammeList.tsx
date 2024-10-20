import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ProgrammeRow from '../contexts/ProgrammeList/ProgrammeRow';
import { Programme } from '../types/Models';
import dayjs from 'dayjs';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import addProgramme from '../api/addProgramme';
import AddProgrammeDialog from '../contexts/AddProgramme/AddProgrammeDialog';
import { selectProgrammes } from '../features/programmeSlice';
import { Typography } from '@mui/material';

const ProgrammeList = () => {
  const dispatch = useAppDispatch();
  const programmes = useAppSelector(selectProgrammes);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddProgramme = (newProgramme: Programme) => {
    dispatch(addProgramme(newProgramme));
    handleCloseDialog();
  };

  // Group programmes by date
  const groupedProgrammes = programmes.reduce(
    (acc: { [key: string]: Programme[] }, programme: Programme) => {
      const date = dayjs(programme.date);
      const dateKey = date.isValid() ? date.format('YYYY-MM-DD') : null;

      if (dateKey) {
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(programme);
      }
      return acc;
    },
    {}
  );

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        {/* Button to open the AddProgrammeDialog */}
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Add
        </Button>
      </div>

      <div>
        <Typography variant='h4' >Programme List</Typography>
        {programmes.length === 0 ? (
          <p>No programmes available. Click "Add" to create a new one.</p>
        ) : (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {Object.keys(groupedProgrammes).map((dateKey) => (
              <ProgrammeRow
                key={dateKey}
                programmes={groupedProgrammes[dateKey]}
              />
            ))}
          </List>
        )}
      </div>

      <AddProgrammeDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleAddProgramme}
      />
    </div>
  );
};

export default ProgrammeList;
