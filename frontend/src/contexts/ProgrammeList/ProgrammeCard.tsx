import React from 'react';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Programme } from '../../types/Models';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import { selectHasPreparationNotes } from '../../features/preparationNoteSlice';
import { useAppSelector } from '../../hooks/useAppSelector';

interface ProgrammeCardProps {
  programme: Programme;
  isFirst: boolean;
  isLast: boolean;
}

const ProgrammeCard = ({ programme, isFirst, isLast }: ProgrammeCardProps) => {
  const handleClick = () => {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
  };

  const hasNotes = useAppSelector(selectHasPreparationNotes(programme.id));
  const programmeLines = programme.programme
    .split('\n')
    .filter((line) => line.trim() !== '');

  const firstLine = programmeLines[0];
  const remainingLines = programmeLines.slice(1).join(' ');

  return (
    <Link
      onClick={handleClick}
      to={`/programme/${programme.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <ListItemText
          sx={{
            padding: '6px',
            border: '1px solid gray',
            borderLeft: isFirst ? 'none' : '4px solid black',
            borderRight: '1px solid gray',
            borderBottom: '1px solid gray',
            borderTopRightRadius: isLast ? '16px' : '0px',
            borderBottomRightRadius: isLast ? '16px' : '0px',
            height: '85px',
            maxWidth: '460px',
            width: '460px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#d1e3ff',
              borderColor: '#4a90e2',
              color: '#004080',
              cursor: 'pointer',
            },
          }}
          primaryTypographyProps={{ fontWeight: 'bold' }}
          primary={programme.name}
          secondary={
            <Typography
              variant="subtitle2"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                color: 'text.secondary',
              }}
            >
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: 'text.primary',
                }}
              >
                {firstLine}
              </Typography>
              {` — ${remainingLines}`}
            </Typography>
          }
        />

        {hasNotes && (
          <IconButton
            sx={{
              position: 'absolute',
              top: -7,
              right: -7,
              backgroundColor: 'purple',
              color: 'white',
            }}
            aria-label="Preparation notes exist"
          >
            <NotesIcon />
          </IconButton>
        )}
      </Box>
    </Link>
  );
};

export default ProgrammeCard;
