import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  addPreparationNote,
  updatePreparationNote,
  deletePreparationNote,
} from '../features/preparationNoteSlice';
import { selectProgrammeById } from '../features/programmeSlice';
import { selectPreparationNotesByProgrammeId } from '../features/preparationNoteSlice';
import NoProgrammeFound from '../contexts/Errors/NoProgrammeFound';
import Box from '@mui/material/Box';
import PreparationNotes from '../contexts/ProgrammeDisplay/PreparationNotes';
import Grid from '@mui/material/Grid';
import ProgrammeContent from '../contexts/ProgrammeDisplay/ProgrammeContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PreparationNote, Note } from '../types/Models';
import { generateUUID } from '../utils/idGeneratorUtil';
import dayjs from 'dayjs';

const ProgrammePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const programme = useAppSelector(selectProgrammeById(id!));
  const preparationNotes = useAppSelector(
    selectPreparationNotesByProgrammeId(id!)
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const [editableNotes, setEditableNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (preparationNotes?.notes) {
      setEditableNotes(preparationNotes.notes);
    } else {
      setEditableNotes([]);
    }
  }, [preparationNotes]);

  // Adjusted handleCreateClick to set isEditMode and initialize editableNotes
  const handleCreateClick = () => {
    setIsEditMode(true);
    setEditableNotes([
      {
        id: generateUUID(),
        order: 1,
        type: '', // Empty type for user input
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
    if (preparationNotes?.notes) {
      setEditableNotes(preparationNotes.notes);
    } else {
      setEditableNotes([]);
    }
    setIsEditMode(false);
  };

  const handleDeleteLastNote = () => {
    if (editableNotes.length === 0 && preparationNotes) {
      dispatch(deletePreparationNote(preparationNotes.id));
      setEditableNotes([]);
      setIsEditMode(false);
    }
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
              {/* Adjusted buttons rendering logic */}
              {!preparationNotes ? (
                isEditMode ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSaveClick(editableNotes)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleCancelClick}
                      sx={{ marginLeft: '8px' }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateClick}
                  >
                    Create Notes
                  </Button>
                )
              ) : (
                <>
                  {isEditMode ? (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSaveClick(editableNotes)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCancelClick}
                        sx={{ marginLeft: '8px' }}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setIsEditMode(true)}
                    >
                      Edit Notes
                    </Button>
                  )}
                </>
              )}
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
            preparationNotes={{ ...preparationNotes, notes: editableNotes }}
            isEditMode={isEditMode}
            onSavePreparation={handleSaveClick}
            onCancelPreparation={handleCancelClick}
            onDeleteLastNote={handleDeleteLastNote}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgrammePage;
