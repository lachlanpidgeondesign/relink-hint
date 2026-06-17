import { motion } from "motion/react";

interface MistakesProps {
  remaining: number;
}

export function Mistakes({ remaining }: MistakesProps) {
  const total = 4;
  
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-4 py-2">
      <p className="font-semibold text-[15px] text-black">Mistakes remaining</p>
      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, i) => {
          const isRemaining = i < remaining;
          return (
            <motion.div
              key={i}
              className={`size-3 rounded-full ${isRemaining ? "bg-[#F3AC3D]" : "bg-[#E3E3E3]"}`}
              initial={false}
              animate={{ scale: isRemaining ? 1 : 0.8, backgroundColor: isRemaining ? "#F3AC3D" : "#E3E3E3" }}
            />
          );
        })}
      </div>
    </div>
  );
}
