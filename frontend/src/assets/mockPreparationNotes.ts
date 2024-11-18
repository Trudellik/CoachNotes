import { PreparationNote } from "../types/Models";
import { generateUUID } from "../utils/idGeneratorUtil";
import { mockProgrammes } from "./mockProgrammes";

export const mockPreparationNotes: PreparationNote[] = [
    {
      id: generateUUID(),
      programmeId: mockProgrammes[0].id,
      notes: [
        {
          id: "1",
          order: 1,
          type: 'time',
          content: 'test',
        },
      ],
    },{
      id: generateUUID(),
      programmeId: mockProgrammes[3].id,
      notes: [
        {
          id: "2",
          order: 1,
          type: 'time',
          content: 'test',
        },
      ],
    },
  ];