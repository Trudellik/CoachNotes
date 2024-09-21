import React from 'react';
import { useParams } from 'react-router-dom';
import { selectProgrammeById } from '../features/programmeSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import NoProgrammeFound from '../contexts/Errors/NoProgrammeFound';
import ProgrammeDetails from '../contexts/ProgrammeDisplay/ProgrammeDetail';
import Box from '@mui/material/Box';
import PreparationNotes from '../contexts/ProgrammeDisplay/PreparationNotes';
import { selectPreparationNotesByProgrammeId } from '../features/preparationNoteSlice';

const ProgrammePage = () => {
  const { id } = useParams();

  // Select the programme by id
  const programme = useAppSelector(selectProgrammeById(id!));

  // Select the preparation notes by programme id
  const preparationNotes = useAppSelector(
    selectPreparationNotesByProgrammeId(id!)
  );

  // If no programme is found, show the NoProgrammeFound component
  if (!programme) {
    return <NoProgrammeFound />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stacks vertically on small screens, side by side on larger
        gap: 3, // Adds spacing between columns on smaller screens
        padding: 3,
      }}
    >
      {/* Programme Details Section */}
      <ProgrammeDetails programme={programme} />

      {/* Preparation Notes Section */}
      <PreparationNotes preparationNotes={preparationNotes} />
    </Box>
  );
};

export default ProgrammePage;
