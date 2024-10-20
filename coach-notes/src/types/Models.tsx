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

export type Exercise = {
  readonly id: string;
  name: string;
  alias: string[];
  pointOfPerformance: string[];
  equipments: string[];
  muscleWorked: string[];
  videoUrl: string;
  previewImage: string;
}