import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface WordCardProps {
  id: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
  shouldShake?: boolean;
}

export function WordCard({ id, text, isSelected, onClick, disabled, shouldShake }: WordCardProps) {
  return (
    <motion.button
      layout
      whileTap={{ scale: 0.95 }}
      animate={shouldShake ? { x: [-5, 5, -5, 5, 0] } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "aspect-square flex items-center justify-center rounded-lg p-2 text-center select-none font-bold text-[13px] sm:text-base leading-tight uppercase transition-colors cursor-pointer touch-manipulation",
        isSelected 
          ? "bg-[#5a5a5a] text-white" 
          : "bg-[#e3e3e3] text-black hover:bg-[#dcdcdc]",
        disabled && !isSelected && "opacity-50 cursor-default"
      )}
    >
      <span className="pointer-events-none">{text}</span>
    </motion.button>
  );
}
