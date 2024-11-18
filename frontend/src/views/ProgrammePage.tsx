import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  addPreparationNote,
  updatePreparationNote,
} from '../features/preparationNoteSlice';
import { selectProgrammeById } from '../features/programmeSlice';
import { selectPreparationNotesByProgrammeId } from '../features/preparationNoteSlice';
import NoProgrammeFound from '../contexts/Errors/NoProgrammeFound';
import Box from '@mui/material/Box';
import PreparationNotes from '../contexts/ProgrammeDisplay/PreparationNotes';
import Grid from '@mui/material/Grid';
import ProgrammeContent from '../contexts/ProgrammeDisplay/ProgrammeContent';
import Typography from '@mui/material/Typography';
import { PreparationNote, Note } from '../types/Models';
import { generateUUID } from '../utils/idGeneratorUtil';
import dayjs from 'dayjs';
import NotesActionButtons from '../components/NotesActionButtons';

const ProgrammePage = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <Typography variant="h6" color="error">
        Invalid Programme ID.
      </Typography>
    );
  }

  const programme = useAppSelector(selectProgrammeById(id));
  const preparationNotes = useAppSelector(
    selectPreparationNotesByProgrammeId(id)
  );

  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const [editableNotes, setEditableNotes] = useState<Note[]>([]);
  const hasNotes =
    preparationNotes && preparationNotes.notes
      ? preparationNotes.notes.length > 0
      : false;

  useEffect(() => {
    if (preparationNotes) {
      setEditableNotes(preparationNotes.notes);
    }
  }, [preparationNotes]);

  const handleCreateClick = () => {
    setIsEditMode(true);
    setEditableNotes([
      {
        id: generateUUID(),
        order: 1,
        type: '',
        content: '',
      },
    ]);
  };

  const handleSaveClick = (updatedNotes: Note[]) => {
    const updatedPreparationNote: PreparationNote = {
      id: preparationNotes?.id || generateUUID(),
      programmeId: id!,
      notes: updatedNotes,
    };

    if (preparationNotes) {
      dispatch(updatePreparationNote(updatedPreparationNote));
    } else {
      dispatch(addPreparationNote(updatedPreparationNote));
    }
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setEditableNotes(preparationNotes?.notes || []);
    setIsEditMode(false);
  };

  if (!programme) {
    return <NoProgrammeFound />;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <Typography variant="h5" color="textPrimary">
              {dayjs(programme.date).format('ddd DD MMM YYYY')}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              WOD
            </Typography>
          </Box>
        </Grid>

        {/* Class Preparation Section */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" color="textPrimary">
              Class Preparation
            </Typography>
            <Box
              sx={{
                minWidth: '200px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <NotesActionButtons
                hasPreparationNotes={hasNotes}
                isEditMode={isEditMode}
                editableNotes={editableNotes}
                onSave={handleSaveClick}
                onCancel={handleCancelClick}
                onCreate={handleCreateClick}
                onEdit={() => setIsEditMode(true)}
              />
            </Box>
          </Box>
        </Grid>

        {/* Main Content Section */}
        <Grid item xs={12} md={7}>
          <ProgrammeContent programme={programme} />
        </Grid>

        {/* Preparation Notes Section */}
        <Grid item xs={12} md={5}>
          <PreparationNotes
            preparationNotes={preparationNotes!}
            isEditMode={isEditMode}
            onSavePreparation={handleSaveClick}
            onCancelPreparation={handleCancelClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgrammePage;
