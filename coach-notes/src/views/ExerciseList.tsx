import React, { useState, useCallback, useMemo } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectExercisesAlphabetically } from '../features/exerciseSlice';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import AddExerciseDialog from '../contexts/AddExercise/AddExerciseDialog';

const commonAliases = {
  oh: 'overhead',
  ll: 'legless',
  kb: 'kettlebell',
  db: 'dumbbell',
  'c&j': 'clean & jerk',
  hs: 'handstand',
};

const ExerciseList = () => {
  const exercises = useAppSelector(selectExercisesAlphabetically);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const getExpandedSearchTerm = (term) => {
    const words = term.toLowerCase().split(' ');
    return words
      .map((word) => (commonAliases[word] ? commonAliases[word] : word))
      .join(' ');
  };

  const filteredExercises = useMemo(() => {
    const expandedSearchTerm = getExpandedSearchTerm(searchTerm);
    return exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(expandedSearchTerm) ||
        (exercise.alias &&
          exercise.alias.some((alias) =>
            alias.toLowerCase().includes(expandedSearchTerm)
          ))
    );
  }, [exercises, searchTerm]);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAddExercise = () => {
    navigate('/add-exercise');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exercise List
      </Typography>
      <TextField
        label="Search Exercise"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearchChange}
      />
      <Grid container spacing={3} style={{ marginBottom: '24px' }}>
        {filteredExercises.map((exercise) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={exercise.id}
            alignItems="center"
            justifyContent="center"
          >
            <Card>
              <CardActionArea component={Link} to={`/exercise/${exercise.id}`}>
                <CardMedia
                  component="img"
                  height="150"
                  image={
                    exercise.previewImage
                      ? exercise.previewImage
                      : 'src/assets/exercise-preview.jpeg'
                  }
                  alt={`${exercise.name} preview`}
                  sx={{
                    backgroundColor: '#f0f0f0',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    noWrap
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exercise.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          alignItems="center"
          justifyContent="center"
        >
          <Card>
            <CardActionArea onClick={handleOpenDialog}>
              <CardContent
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '135px',
                }}
              >
                <AddIcon style={{ fontSize: 50 }} />
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Typography variant="h6">Add New Exercise</Typography>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <AddExerciseDialog
        open={open}
        onClose={handleCloseDialog}
        onAdd={handleAddExercise}
      />
    </Container>
  );
};

export default ExerciseList;
