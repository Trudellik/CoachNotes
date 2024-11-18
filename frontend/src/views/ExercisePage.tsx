import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectExerciseById } from '../features/exerciseSlice';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const ExercisePage = () => {
  const { id } = useParams();

  const exercise = useAppSelector(selectExerciseById(id!));

  return (
    <Container sx={{ marginTop: 5 }}>
      {exercise ? (
        <Card>
          <CardMedia
            component="iframe"
            height="315"
            src={exercise.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {exercise.name}
            </Typography>
            <Stack direction="row" spacing={1} marginBottom={2}>
              {exercise.alias.map((alias) => (
                <Chip label={alias} key={alias} />
              ))}
            </Stack>
            <Typography variant="h6" gutterBottom>
              Points of Performance:
            </Typography>
            <Typography variant="body1">
              {exercise.pointOfPerformance}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
              Muscles Worked:
            </Typography>
            <Typography variant="body1">{exercise.muscleWorked}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" color="error">
          Exercise not found.
        </Typography>
      )}
    </Container>
  );
};

export default ExercisePage;
