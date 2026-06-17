export type Word = string;

export interface PuzzleGroup {
  difficulty: 1 | 2 | 3 | 4;
  connectionTitle: string;
  words: Word[];
  synonyms: string[];
}

export const PUZZLE_DATA: PuzzleGroup[] = [
  {
    difficulty: 1,
    connectionTitle: "There's seven of them",
    words: ["SEAS", "DAYS", "DEFENCE", "DEADLY SINS"],
    synonyms: [
      "seven of these",
      "groups of seven",
      "things that come in sevens",
      "seven things",
      "there are seven",
    ],
  },
  {
    difficulty: 2,
    connectionTitle: "Band members who went solo",
    words: ["STING", "PHIL COLLINS", "WING", "ROBBIE WILLIAMS"],
    synonyms: [
      "solo artists from bands",
      "musicians who left their band",
      "solo careers",
      "former band members",
      "went solo",
    ],
  },
  {
    difficulty: 3,
    connectionTitle: "Rank",
    words: ["GOAL", "SENIORITY", "FOUL SMELL", "POSITION"],
    synonyms: [
      "rank",
      "hierarchy",
      "status",
      "standing",
      "order of importance",
    ],
  },
  {
    difficulty: 4,
    connectionTitle: "Made of panels",
    words: ["FOOTBALL", "FORWARD", "SOLAR FARM", "QUILT"],
    synonyms: [
      "panels",
      "things with panels",
      "made from panels",
      "constructed from panels",
      "panel-based",
    ],
  },
];