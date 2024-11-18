import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Note } from '../../types/Models';
import { toUpperFirstCase } from '../../utils/textUtil';

interface NoteItemProps {
  note: Note;
  isEditMode: boolean;
  handleRemoveNote: (id: string) => void;
  handleNoteChange: (id: string, content: string) => void;
  autoFocus?: boolean;
}

const NoteItem: React.FC<NoteItemProps> = ({
  note,
  isEditMode,
  handleRemoveNote,
  handleNoteChange,
  autoFocus = false,
}) => {
  return (
    <div
      className="note-container"
      style={{
        backgroundColor: '#f3e5f5',
        padding: '16px',
        paddingTop: '8px',
        borderRadius: '8px',
        marginBottom: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle1" color="textSecondary">
          {toUpperFirstCase(note.type)}
        </Typography>
        {isEditMode && (
          <IconButton
            className="delete-icon"
            color="error"
            onClick={() => handleRemoveNote(note.id)}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
      {isEditMode ? (
        <TextField
          value={note.content}
          onChange={(e) => handleNoteChange(note.id, e.target.value)}
          multiline
          fullWidth
          rows={3}
          variant="outlined"
          autoFocus={autoFocus}
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            marginTop: '8px',
          }}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '8px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {note.content || 'No content available.'}
        </Typography>
      )}
    </div>
  );
};

export default NoteItem;
