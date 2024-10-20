import React from 'react';
import { Programme, Exercise } from '../../types/Models';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectExercisesWithAliases } from '../../features/exerciseSlice';

interface ProgrammeProps {
  programme: Programme;
}

const ProgrammeContent = ({ programme }: ProgrammeProps) => {
  const exercises = useAppSelector(selectExercisesWithAliases);

  if (!exercises || exercises.length === 0) return null;

  // Sort exercises by term length in descending order to ensure longest match is found first
  const sortedExercises = exercises.sort((a, b) => b.name.length - a.name.length);

  // Create a copy of the programme content to avoid repeated matches
  let programmeContentCopy = programme.programme.toLowerCase();

  // Match exercises within the programme content based on `terms`
  const matchedExercises = sortedExercises.filter((exercise) =>
    exercise.terms.some((term) => {
      const regex = new RegExp(`\b${term.toLowerCase()}\b`, 'gi');
      if (regex.test(programmeContentCopy.toLowerCase())) {
        programmeContentCopy = programmeContentCopy.replace(regex, ' '.repeat(term.length));
      }
    })
  );

  // Create a clickable version of the programme text with exercise links
  const programmeContentWithLinks = () => {
    let content = programme.programme;
    matchedExercises.forEach((exercise) => {
      exercise.terms.forEach((term) => {
        const regex = new RegExp(`\\b(${term}s?)\\b`, 'gi');
        content = content.replace(
          regex,
          `<a href="/exercise/${exercise.id}" style="color: #1976d2; text-decoration: none;" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';">$1</a>`
        );
      });
    });
    return content;
  };

  return (
    <>
      {/* Programme Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" color="textPrimary">
          Programme:
        </Typography>
        <Typography variant="h6" color="textPrimary" sx={{ textAlign: 'right' }}>
          {programme.name}
        </Typography>
      </Box>

      {/* Programme Content with clickable exercise terms */}
      <Typography
        variant="body1"
        sx={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.6,
          mb: 4,
          backgroundColor: '#f5f5f5',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        dangerouslySetInnerHTML={{ __html: programmeContentWithLinks() }}
      />

      {/* Related Exercises Section (Before Coach's Note) */}
      {matchedExercises.length > 0 && (
        <>
          <Grid container spacing={1} sx={{ mb: 4 }}>
            {matchedExercises.map((exercise) => (
              <Grid item key={exercise.id}>
                <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
                  <Chip
                    label={exercise.name}
                    clickable
                    color="primary"
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Coach's Note */}
      <Typography variant="h6" color="textPrimary" sx={{ mb: 2 }}>
        Coach's Note:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.6,
          backgroundColor: '#f9f9f9',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {programme.attentionNote || 'No notes available.'}
      </Typography>
    </>
  );
};

export default ProgrammeContent;