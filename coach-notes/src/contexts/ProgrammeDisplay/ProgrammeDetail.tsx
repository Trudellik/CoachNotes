import React from 'react';
import Box from '@mui/material/Box';
import { Programme } from '../../types/Models';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

interface ProgrammeProps {
  programme: Programme;
}

const ProgrammeDetails = ({ programme }: ProgrammeProps) => {
  return (
    <Box sx={{ padding: 3, maxWidth: '800px', margin: '0 auto' }}>
      {/* Date and Programme Name */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" color="textPrimary">
          {dayjs(programme.date).format('ddd DD MMM YYYY')}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ textAlign: 'right' }}
        >
          {programme.name}
        </Typography>
      </Box>

      {/* Programme */}
      <Box
        sx={{
          mb: 4,
          backgroundColor: '#f5f5f5',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" color="textPrimary" sx={{ mb: 2 }}>
          Programme:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.6,
          }}
        >
          {programme.programme}
        </Typography>
      </Box>

      {/* Coach's Note */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" color="textPrimary" sx={{ mb: 2 }}>
          Coach's Note:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.6,
          }}
        >
          {programme.attentionNote || 'No notes available.'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgrammeDetails;
