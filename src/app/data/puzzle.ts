export type WordObj = {
  id: string;
  word: string;
  groupId: number;
};

export type ConnectionGroup = {
  difficulty: number;
  connectionTitle: string;
  words: string[];
  synonyms: string[];
};

export const PUZZLE_DATA: ConnectionGroup[] = [
  {
    difficulty: 1,
    connectionTitle: "There's seven of them",
    words: ["SEAS", "DAYS", "DEFENCE", "DEADLY SINS"],
    synonyms: ["seven of these", "groups of seven", "things that come in sevens", "seven things"]
  },
  {
    difficulty: 2,
    connectionTitle: "Band members who went solo",
    words: ["STING", "PHIL COLLINS", "WING", "ROBBIE WILLIAMS"],
    synonyms: ["solo artists from bands", "musicians who left their band", "former band members"]
  },
  {
    difficulty: 3,
    connectionTitle: "Rank",
    words: ["GOAL", "SENIORITY", "FOUL SMELL", "POSITION"],
    synonyms: ["rank", "hierarchy", "status", "standing"]
  },
  {
    difficulty: 4,
    connectionTitle: "Made of panels",
    words: ["FOOTBALL", "FORWARD", "SOLAR FARM", "QUILT"],
    synonyms: ["panels", "things with panels", "made from panels"]
  }
];

export const GROUP_COLORS = {
  1: "bg-yellow-200",
  2: "bg-green-200",
  3: "bg-blue-200",
  4: "bg-purple-200"
};
