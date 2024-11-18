import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import ProgrammeCard from './ProgrammeCard';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Programme } from '../../types/Models';

const ProgrammeRow = ({ programmes }: { programmes: Programme[] }) => {
  const rowContainerRef = useRef<HTMLDivElement | null>(null);
  const [avatarHeight, setAvatarHeight] = useState(85);
  const programmeDate = dayjs(programmes[0].date);
  const isValidDate = programmeDate.isValid();

  useEffect(() => {
    if (rowContainerRef.current) {
      const rowHeight = rowContainerRef.current.clientHeight;
      setAvatarHeight(rowHeight);
    }
  }, [programmes]);

  return (
    <ListItem
      alignItems="center"
      sx={{
        display: 'flex',
        padding: 0,
      }}
    >
      <ListItemAvatar
        sx={{
          backgroundColor: '#e0f7fa',
          padding: '6px',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30px',
          height: `${avatarHeight}px`,
        }}
      >
        <Typography variant="caption" display="block" color="#0277bd">
          {isValidDate ? programmeDate.format('ddd') : 'N/A'}
        </Typography>
        <Typography variant="h6" display="block" color="#0277bd">
          {isValidDate ? programmeDate.format('DD') : 'N/A'}
        </Typography>
        <Typography variant="caption" display="block" color="#0277bd">
          {isValidDate ? programmeDate.format('MMM') : 'N/A'}
        </Typography>
      </ListItemAvatar>

      <div
        ref={rowContainerRef}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexGrow: 1,
          gap: '8px',
        }}
      >
        {programmes.map((programme: Programme, index: number) => (
          <ProgrammeCard
            key={programme.id}
            programme={programme}
            isFirst={index === 0}
            isLast={index === programmes.length - 1}
          />
        ))}
      </div>
    </ListItem>
  );
};

export default ProgrammeRow;
