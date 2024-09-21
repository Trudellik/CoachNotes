import dayjs from 'dayjs';
import { createTransform } from 'redux-persist';

const dateTransform = createTransform(
  // Transform function for serialization (before persisting)
  (inboundState, key) => {
    console.log(`IN ${key}`, inboundState);
    if (Array.isArray(inboundState)) {
      return inboundState.map((item) => ({
        ...item,
        // Convert Dayjs or Date objects to ISO string
        date: dayjs(item.date).isValid()
          ? dayjs(item.date).toISOString()
          : item.date,
      }));
    }
    return inboundState;
  },
  // Transform function for deserialization (after rehydrating)
  (outboundState, key) => {
    console.log(`OUT ${key}`, outboundState);
    if (Array.isArray(outboundState)) {
      return outboundState.map((item) => ({
        ...item,
        // Convert ISO string back to Dayjs object if it's a valid date string
        date:
          typeof item.date === 'string' && dayjs(item.date).isValid()
            ? dayjs(item.date)
            : item.date,
      }));
    }
    return outboundState;
  },
  // Define the slice(s) where this transform applies
  { whitelist: ['programmes'] } // Specify the slice key(s) to apply the transform to
);

export default dateTransform;
