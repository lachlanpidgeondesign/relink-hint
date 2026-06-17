import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { ConnectionGroup, GROUP_COLORS } from "../../data/puzzle";
import { clsx } from "clsx";

interface SolvedRowProps {
  group: ConnectionGroup;
  guessedCorrectly: boolean;
}

export function SolvedRow({ group, guessedCorrectly }: SolvedRowProps) {
  const bgClass = GROUP_COLORS[group.difficulty as keyof typeof GROUP_COLORS] || "bg-gray-200";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={clsx(
        "w-full rounded-xl p-4 flex flex-col items-center justify-center gap-1 text-center shadow-sm",
        bgClass
      )}
    >
      <div className="flex items-center gap-2 font-bold text-slate-900 text-lg uppercase">
        {group.connectionTitle}
        {guessedCorrectly ? (
          <Check className="w-5 h-5 text-green-700" />
        ) : (
          <X className="w-5 h-5 text-red-700" />
        )}
      </div>
      <div className="text-slate-800 text-sm sm:text-base">
        {group.words.join(", ")}
      </div>
    </motion.div>
  );
}
