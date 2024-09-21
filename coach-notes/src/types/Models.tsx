import { Dayjs } from 'dayjs';

export type Programme = {
  readonly id: string;
  name: string;
  date: Dayjs | null;
  programme: string;
  attentionNote?: string;
};

export type PreparationNote = {
  readonly id: string;
  programmeId: string;
  notes: Note[];
};

export type Note = {
  readonly id: string;
  order: number;
  type: string;
  content: string;
};
