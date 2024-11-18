import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NoProgrammeFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        No Programme Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        We couldn't find the programme you're looking for.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back to Home
      </Button>
    </Box>
  );
};

export default NoProgrammeFound;
