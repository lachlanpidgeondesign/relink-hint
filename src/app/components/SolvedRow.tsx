import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Difficulty } from "../GameData";

interface SolvedRowProps {
  title: string;
  words: string[];
  difficulty: Difficulty;
  isCorrect: boolean; // Did user guess the title correctly?
}

const COLORS: Record<Difficulty, string> = {
  1: "#f8cd8b",
  2: "#66e0c4",
  3: "#87d1dc",
  4: "#9aa3ff",
};

export function SolvedRow({ title, words, difficulty, isCorrect }: SolvedRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full rounded-lg p-2 flex flex-col items-center justify-center gap-1 text-center mb-2"
      style={{ backgroundColor: COLORS[difficulty] }}
    >
      <div className="flex items-center gap-2">
        <span className="font-bold text-[13px] sm:text-base text-black uppercase">{title}</span>
        {isCorrect ? (
          <div className="bg-white rounded-full p-0.5">
             <Check size={14} className="text-black" strokeWidth={3} />
          </div>
        ) : (
          <div className="bg-white rounded-full p-0.5">
             <X size={14} className="text-black" strokeWidth={3} />
          </div>
        )}
      </div>
      <p className="text-[13px] font-normal text-black">{words.join(", ")}</p>
    </motion.div>
  );
}
