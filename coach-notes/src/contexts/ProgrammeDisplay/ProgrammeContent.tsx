import React from 'react';
import { Programme } from '../../types/Models';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';

interface ProgrammeProps {
  programme: Programme;
}

const ProgrammeContent = ({ programme }: ProgrammeProps) => {
  return (
    <>
      {/* Programme */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6" color="textPrimary">
          Programme:
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ textAlign: 'right' }}
        >
          {programme.name}
        </Typography>
      </Box>
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
      >
        {programme.programme}
      </Typography>

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
