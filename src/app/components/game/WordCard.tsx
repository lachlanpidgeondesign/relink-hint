import { motion } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { WordObj } from "../../data/puzzle";

interface WordCardProps {
  wordObj: WordObj;
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: (wordObj: WordObj) => void;
}

export function WordCard({ wordObj, isSelected, isDisabled, onToggle }: WordCardProps) {
  return (
    <motion.button
      layoutId={wordObj.id}
      whileHover={!isDisabled && !isSelected ? { scale: 1.05 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      onClick={() => !isDisabled && onToggle(wordObj)}
      className={twMerge(
        clsx(
          "aspect-[4/3] w-full flex items-center justify-center rounded-xl font-bold uppercase text-sm sm:text-base md:text-lg transition-colors cursor-pointer select-none",
          isSelected
            ? "bg-slate-800 text-white shadow-inner"
            : "bg-slate-200 text-slate-800 hover:bg-slate-300",
          isDisabled && "opacity-50 cursor-not-allowed"
        )
      )}
    >
      {wordObj.word}
    </motion.button>
  );
}
