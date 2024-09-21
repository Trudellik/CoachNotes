import dayjs from 'dayjs';
import { PreparationNote, Programme } from '../types/Models';
import { generateUUID } from '../utils/idGeneratorUtil';

export const mockProgrammes: Programme[] = [
  {
    id: generateUUID(),
    name: 'OPEN WORKOUT 24.1 Metcon',
    date: dayjs('2024-03-01'),
    programme: `Teams of 2 – AMRAP 32:
3 Man makers (2 x 22,5/15 kg)
6 Burpee pullups
9 Boxjumps (24”/20”)

*1 Man maker: 1 DB pushups, 2 DB rows (in top plank position), 1 Cluster.
*Partner 1 finish the whole movement before partner 2 start on the next one.

Strength
A1. Ring dips 10-10-8-8
A2. Chin-ups 10-10-8-8
*RPE 9-10/10

Metcon
4 rounds of:
500m Row
25 Wallballs
Rest 2 minutes
Timecap: 18 min. (inc. rest).
Note: One round should take 3 min.`,
    attentionNote: 'High intensity with minimal rest. No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Stamina',
    date: dayjs('2024-03-01'),
    programme: `1 mile run
1 mile row
1 mile ski
1 mile bike`,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Strength and Interval Workout',
    date: dayjs('2024-03-02'),
    programme: `Metcon
Teams of 2 –
AMRAP 32:
3 Man makers (2 x 22,5/15 kg)
6 Burpee pullups
9 Boxjumps (24”/20”)
*1 Man maker: 1 DB pushups, 2 DB rows (in top plank position), 1 Cluster.
*Partner 1 finish the whole movement before partner 2 start on the next one.`,
    attentionNote: '2 and 2 can share equipment and start staggered.',
  },
  {
    id: generateUUID(),
    name: 'Skill Work and Chipper',
    date: dayjs('2024-03-03'),
    programme: `Strength
A1. Ring dips 10-10-8-8
A2. Chin-ups 10-10-8-8
*RPE 9-10/10

Metcon
4 rounds of:
500m Row
25 Wallballs
Rest 2 minutes
Timecap: 18 min. (inc. rest).
Note: One round should take 3 min.`,
    attentionNote:
      '2 and 2 can share equipment in metcon and start staggered. Bring both echo and bikeerg into play for this one.',
  },
  {
    id: generateUUID(),
    name: 'Skill Work with Pull Ups/CTB',
    date: dayjs('2024-03-04'),
    programme: `
      Skill
Pullups/CTB
Metcon
For time:
16 CTB/Pullups
16 Deadlifts (100/70
kg)
16 Cal Bike
13 CTB/Pullups
13 Deadlifts
13 Cal Bike
10 CTB/Pullups
10 Deadlifts
10 Cal Bike
Timecap: 12 min.
Note:
Deadlifts should be
done UB.
    `,
    attentionNote:
      '2 and 2 can share equipment in metcon and start staggered. Bring both echo and bikeerg into play for this one.',
  },
  {
    id: generateUUID(),
    name: 'Weightlifting with Positional Work',
    date: dayjs('2024-03-05'),
    programme: `
      Weightlifting
Every 90s x 8:
1 High hang snatch
+ 1 Hang snatch
+ 1 Low hang snatch
*Technique before
weights. Add load
after each successful
set.
Metcon
21-18-15-12-9
Burpees
DB snatches (22,5/15
kg)
Timecap: 8 min.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Fast EMOM and Chipper',
    date: dayjs('2024-03-06'),
    programme: `
      Skill
Beatswing/T2B
Metcon
EMOM x 10:
8 Thrusters (20/15
kg) + 8 T2B
Rest 3 min.
EMOM x 10:
8 Thrusters (20/15
kg) + 24 DU
Note:
They should have
around 10s rest each
minute.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Team of 2 with Sync Work',
    date: dayjs('2024-03-07'),
    programme: `
      Metcon
Teams of 2:
On the 0:00
15-12-9
Synchro frontsquats
(60/40 kg)
Synchro burpees over
bar
On the 6:00
12-9-6
Synchro frontsquats
(75/50 kg)
Synchro burpees over
bar
On the 12:00
9-6-3
Synchro frontsquats
(90/60 kg)
Synchro burpees over
bar
On the 15:00
RepeatMetcon
Teams of 2:
On the 0:00
15-12-9
Synchro frontsquats
(60/40 kg)
Synchro burpees over
bar
On the 6:00
12-9-6
Synchro frontsquats
(75/50 kg)
Synchro burpees over
bar
On the 12:00
9-6-3
Synchro frontsquats
(90/60 kg)
Synchro burpees over
bar
On the 15:00
Repeat
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Open 24.2',
    date: dayjs('2024-03-08'),
    programme: `
      Open 24.2 Workout. No specific details provided.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'HSPU Skill and AMRAP Couplets',
    date: dayjs('2024-03-09'),
    programme: `
      Skill
HSPU
Metcon
AMRAP 4:
10 KB swings
(24/16 kg)
10 C2B/Pullups
Rest 4 min.
AMRAP 4:
10 Box jumps
(24”/20”)
10 HSPU
Rest 4 min.
AMRAP 4:
5 One arm Devil
presses (22,5/15
kg)
5 Wall Walks
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Weightlifting with Positional Work',
    date: dayjs('2024-03-10'),
    programme: `
      Weightlifting
Every 90s x 8:
1 High hang clean
+ 1 Hang clean
+ 1 Low hang clean
*Technique before
weights. Add load after
each successful set.
Metcon
E3MOM x 5:
10 Power Cleans
(70/55kg)
Max Double Unders
until 2m mark
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Modified "Eva"',
    date: dayjs('2024-03-11'),
    programme: `
      Metcon
Modified “Eva”
6 rounds for time:
400m Run
15 KB swings (32/24
kg)
15 Pullups
RX+ = with weight
vest
Timecap: 32 min.
    `,
    attentionNote:
      'Up the KB swings reps to 25 if more people want to do RX than KB available.',
  },
  {
    id: generateUUID(),
    name: 'Strength and Quick Triplet',
    date: dayjs('2024-03-12'),
    programme: `
      Strength
A1. Hip Thrusters
8-8-8-8
A2. Walking Lunges
8-8-8-8
*RPE 9-10/10
Metcon
3 rounds for time:
18/14 Cal Echo bike
15 HSPU
*After each round 20m
farmers walk (2x32/24
kg KB)
Timecap: 12 min.
    `,
    attentionNote:
      'Bring in bikeergs or rowers if needed. Two people can share equipment and start staggered.',
  },
  {
    id: generateUUID(),
    name: 'BMU Skill and "Annie"',
    date: dayjs('2024-03-13'),
    programme: `
      Skill
Bar MU
Metcon
“Annie with burpees
and Bar MU”
5-4-3-2-1
Bar MU
50-40-30-20-10
DUs
25-20-15-10-5
Burpees
50-40-30-20-10
Sit Ups
Timecap: 18 min.
Note:
Either scale DU to
single unders or scale
the reps.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Team of 2, Share Anyhow',
    date: dayjs('2024-03-14'),
    programme: `
      Metcon
Teams of 2 (split
anyhow)
3 rounds of:
80 Wallballs (9/6 kg)
60m HSW
40 Double KB clean
(2x24/16 kg)
10 Rope climbs
Timecap: 30 min.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Open 24.3',
    date: dayjs('2024-03-15'),
    programme: `
      Open 24.3 Workout. No specific details provided.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Weightlifting with Hang Snatch and Overhead Squats',
    date: dayjs('2024-03-16'),
    programme: `
      Weightlifting
EMOM x 12:
1 Hang snatch
+ 1 Overhead squat
*Start at 50% and build
up every minute.
Metcon
For time:
25 Bar Facing Burpees
25 Hang squat snatches
(50/35 kg)
25 Cal
25 Hang squat snatches
(50/35 kg)
25 Bar Facing Burpees
Timecap: 13 min.
    `,
    attentionNote: '2 and 2 can share a machine for cal. Starting staggered.',
  },
  {
    id: generateUUID(),
    name: 'Longer Duration AMRAP',
    date: dayjs('2024-03-17'),
    programme: `
      Metcon
AMRAP 30:
800m Row
30 Wallballs (9/6 kg)
20 T2B
    `,
    attentionNote:
      '2 and 2 can share a rower, one starting on the row and one on the wallballs.',
  },
  {
    id: generateUUID(),
    name: 'HSPU Skill and Gymnastic AMRAP',
    date: dayjs('2024-03-18'),
    programme: `
      Skill
HSPU
Every 30s x 10:
5 HSPU
*Scale the HSPU so
it matches you.
Metcon
AMRAP 15:
21/15 Cal
Into,
3 rounds:
2 Bar MU
4 Squat Cleans
(70/50 kg)
6 Pistols
    `,
    attentionNote: '2 and 2 can share a machine, and start with a 2m delay.',
  },
  {
    id: generateUUID(),
    name: 'WL with Push Press and Push Jerks',
    date: dayjs('2024-03-19'),
    programme: `
      Weightlifting
Every 90s x 8:
1 Push Press
+ 1 Push jerk
*Technique before
weights.
Metcon
3 rounds for time:
10 Push Jerks (70/45
kg)
15 Pullups/Chest to
bar
400m Run
Timecap: 12 min.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: '32m AMRAP with 1m Breaks',
    date: dayjs('2024-03-20'),
    programme: `
      Metcon
Max rounds of:
12 Burpees
13 Box jumps
(30”/24”)
14 DB snatch
(32/22,5 kg)
Rest 1 min. after
each round
Timecap: 32 min.
    `,
    attentionNote: '2 and 2 can share, starting staggered.',
  },
  {
    id: generateUUID(),
    name: 'Strength with Front Squats, KB Swings, and DU',
    date: dayjs('2024-03-21'),
    programme: `
      Strength
A1. Ring dips
8-8-6-6
A2. Chin-ups
8-8-6-6
*RPE 9-10/10
Metcon
5 rounds for time:
10 Frontsquats (80/50
kg)
20 KB swings (32/24
kg)
30 DU
Timecap: 16 min.
    `,
    attentionNote:
      'No apparent issues. Up KB reps if more want to go RX than KBs available.',
  },
  {
    id: generateUUID(),
    name: 'Team of 2 with Running, Syncro DL, and Burpee Box Jumps',
    date: dayjs('2024-03-22'),
    programme: `
      Metcon
Teams of 2
4 rounds for
time:
800m Run
(both)
10 Synchro
Deadlifts
(120/80 kg)
20 Burpee
Boxjumps
(24”/20”)
Timecap: 24
min.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Beatswings/TTB Skill and Metcon',
    date: dayjs('2024-03-23'),
    programme: `
      Skill
Beatswing/TTB
Metcon
AMRAP 12:
Buy in:
80/60 Cal erg
In remaining time,
AMRAP:
4 TTB
8 One arm DB thrusters
(22,5/15 kg)
12 DB hang clean and
jerk (22,5/15 kg)
    `,
    attentionNote:
      '2 and 2 can share machine, start people staggered (give 4m TC on the cal).',
  },
  {
    id: generateUUID(),
    name: 'Nancy in an AMRAP Format',
    date: dayjs('2024-03-24'),
    programme: `
      Metcon
AMRAP ”Nancy”
AMRAP 22
400m Run
15 Overhead squats (43/29
kg)
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Beatswings/Pull Ups Skill and AMRAP',
    date: dayjs('2024-03-25'),
    programme: `
      Skill
Beatswing/Pullups
Metcon
6 rounds for time:
10m HSW
15 C2B/Pull ups
30 DU
Rest 1 minutes
Timecap: 15 min.
Note: Scale 10m HSW
to 3 Wall Walks
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Strength Work and AMRAP with Descending Rep Scheme',
    date: dayjs('2024-03-26'),
    programme: `
      Strength
A1. Hip Thrusters
8-8-6-6
A2. Walking Lunges
8-8-6-6
*RPE 9-10/10
Metcon
AMRAP 4:
27/21 Cal
27 Wallballs (9/6 kg)
27 Burpees
2 min. rest
AMRAP 4:
21/15 Cal
21 Wallballs (9/6 kg)
21 Burpees over
rower
2 min. rest
AMRAP 4:
15/9 Cal
15 Wallballs (9/6 kg)
15 Burpees to pullup
    `,
    attentionNote: '2 people can share equipment and go simultaneously.',
  },
  {
    id: generateUUID(),
    name: 'WL Work and Rough Couplet',
    date: dayjs('2024-03-27'),
    programme: `
      Weightlifting
Every 90s x 8:
1 Hang Snatch
+ 1 Low Hang
Snatch
+ 1 Snatch
*Technique before
weights. Add load
after each successful
set.
Metcon
AMRAP 9:
4 Snatches (50/35
kg)
8 TTB
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: '4 Rounds with HSPU, DBL KB Snatch and Echo',
    date: dayjs('2024-03-28'),
    programme: `
      Metcon
4 rounds for time:
20 HSPU
30 Double KB snatch
(24/16 kg)
40/30 Cal Echo bike
Timecap: 20 min.
    `,
    attentionNote:
      'Bring in a rower/bikeerg if needed. 2 and 2 can share equipment.',
  },
  {
    id: generateUUID(),
    name: 'Teams of 2 AMRAP 26',
    date: dayjs('2024-03-29'),
    programme: `
      Metcon
Teams of 2
AMRAP 26
12 BB Push Press
(40/30kg)
12 DB Snatch
(22.5/15kg)
12 High burpee
boxjump overs
(30”/24”)
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Weightlifting Work and Classic "DT"',
    date: dayjs('2024-03-30'),
    programme: `
      A. Weightlifting
Every 90s x 8:
1 Hang clean
+ 1 Low Hang clean
+ 1 Clean
*Technique before
weights. Add load
after each successful
set.
B. Metcon
”DT”
5 RFT:
12 Deadlift (70/47,5
kg)
9 Hang power clean
6 Push jerks
Timecap: 9 min.
    `,
    attentionNote: 'No apparent issues.',
  },
  {
    id: generateUUID(),
    name: 'Beatswings/TTB Skill and Triplet',
    date: dayjs('2024-03-31'),
    programme: `
      A. Skill
Beatswing/TTB
B. Metcon
4 rounds for time:
20 F.R. walking lunges
(50/35 kg)
15 TTB
10 Burpees over bar
Timecap: 15 min.
    `,
    attentionNote: 'No apparent issues.',
  },
];

export const mockPreparationNotes: PreparationNote[] = [
  {
    id: generateUUID(),
    programmeId: mockProgrammes[0].id,
    notes: [
      {
        order: 1,
        type: 'time',
        content: 'test',
      },
    ],
  },
];
