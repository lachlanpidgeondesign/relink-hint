import React from "react";
import { motion } from "motion/react";

// ─── Types ───

interface GuessLogEntry {
  groupIdx: number;
  wasCorrect: boolean;
  wrongCountBefore: number;
}

interface ResultsComparisonProps {
  guessLog: GuessLogEntry[];
  relinkAttempts: number[];
  relinkAnswerLength: number;
  lostDuringFinding: boolean;
  finalResult: "correct" | "failed";
  groupColors: {
    bg: string;
    border: string;
    containerBg: string;
    solved: string;
    solvedBorder: string;
    selectedBg: string;
    selectedShadow: string;
  }[];
  flipped?: boolean;
}

// Colored square emojis matching group order: purple, blue, green, orange
const GROUP_SQUARES = ["🟪", "🟦", "🟩", "🟧"];
const GROUP_EMOJIS = ["🟪", "🟦", "🟩", "🟧"];

export function ResultsComparison({
  guessLog,
  relinkAttempts,
  relinkAnswerLength,
  lostDuringFinding,
  finalResult,
  groupColors,
  flipped = false,
}: ResultsComparisonProps) {
  // Get only solved rows for compact format
  const solvedRows = guessLog
    .filter((entry) => entry.wasCorrect)
    .map((entry) => ({
      groupIdx: entry.groupIdx,
      wrongCountBefore: entry.wrongCountBefore,
    }));

  const reachedLinkPhase = !lostDuringFinding;
  const linkSucceeded = finalResult === "correct";

  // Count link phase failed attempts
  const linkFailedAttempts = relinkAttempts.filter(
    (correctCount) => correctCount !== relinkAnswerLength
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center justify-center z-[55] overflow-auto"
    >
      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-[800px] px-[16px] py-[32px]">
        <div className="flex gap-[32px] items-start w-full justify-center flex-wrap">
          {/* Full Results card */}
          {(() => {
            const fullCard = (
              <div className="flex flex-col gap-[16px] items-center">
                <h2 className="font-['Literata',serif] font-bold text-[#191919] text-[20px]">
                  Variation {flipped ? "B" : "A"}
                </h2>
            <div className="bg-[#fcfcfc] relative rounded-[8px] border border-[#5665ff] shadow-[0px_2px_0px_0px_#5665ff]">
              <div className="flex flex-col items-start p-[16px]">
                {/* Phase 1: each guess = one row */}
                {guessLog.map((entry, i) => {
                  const colorEmoji = GROUP_SQUARES[entry.groupIdx] || "🟧";
                  const tilesInGroup = 4;

                  if (entry.wasCorrect) {
                    return (
                      <motion.div
                        key={`p1-${i}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.06, duration: 0.25 }}
                        className="flex items-center text-[24px] leading-none"
                      >
                        <span>{colorEmoji}{colorEmoji}{colorEmoji}⬛</span>
                      </motion.div>
                    );
                  } else {
                    const mistakeCount = entry.wrongCountBefore + 1;
                    const coloredCount = tilesInGroup - mistakeCount;

                    return (
                      <motion.div
                        key={`p1-${i}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.06, duration: 0.25 }}
                        className="flex items-center text-[24px] leading-none"
                      >
                        <span>{"⬜".repeat(mistakeCount)}{colorEmoji.repeat(coloredCount)}</span>
                      </motion.div>
                    );
                  }
                })}

                {/* Phase 2: relink attempts */}
                {!lostDuringFinding && relinkAttempts.length > 0 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + guessLog.length * 0.06, duration: 0.25 }}
                      className="text-[24px] leading-none"
                    >
                      ➖➖➖➖
                    </motion.div>
                    {relinkAttempts.map((correctCount, i) => {
                      const wrongCount = relinkAnswerLength - correctCount;
                      const blacks = "⬛".repeat(correctCount);
                      const whites = "⬜".repeat(wrongCount);
                      return (
                        <motion.div
                          key={`p2-${i}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (guessLog.length + i) * 0.06, duration: 0.25 }}
                          className="flex items-center text-[24px] leading-none"
                        >
                          <span>{blacks}{whites}</span>
                        </motion.div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
          );

          const compactCard = (
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className="font-['Literata',serif] font-bold text-[#191919] text-[20px]">
              Variation {flipped ? "A" : "B"}
            </h2>
            <div className="bg-[#fcfcfc] relative rounded-[8px] border border-[#5665ff] shadow-[0px_2px_0px_0px_#5665ff]">
              <div className="flex flex-col items-start p-[16px]">
                {/* Phase 1: Each guess is a row (correct or incorrect) */}
                {guessLog.map((entry, i) => {
                  const emoji = GROUP_EMOJIS[entry.groupIdx];
                  return (
                    <motion.div
                      key={`p1-${i}`}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.25 }}
                      className="flex items-center gap-[8px]"
                    >
                      <span className="text-[24px] leading-none">
                        {emoji}{emoji}{emoji}
                      </span>
                      <span className="text-[24px] leading-none">
                        {entry.wasCorrect ? "✅" : "❌"}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Phase 2: Link phase — each attempt is a row */}
                {reachedLinkPhase && relinkAttempts.length > 0 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + guessLog.length * 0.06, duration: 0.25 }}
                      className="text-[24px] leading-none"
                    >
                      ➖➖➖➖
                    </motion.div>
                    {relinkAttempts.map((correctCount, i) => {
                      const isCorrect = correctCount === relinkAnswerLength;
                      return (
                        <motion.div
                          key={`p2-${i}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (guessLog.length + i) * 0.06, duration: 0.25 }}
                          className="flex items-center gap-[8px]"
                        >
                          <span className="text-[24px] leading-none">⬛</span>
                          <span className="text-[24px] leading-none">
                            {isCorrect ? "✅" : "❌"}
                          </span>
                        </motion.div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
          );

          return flipped ? <>{compactCard}{fullCard}</> : <>{fullCard}{compactCard}</>;
          })()}
        </div>
      </div>
    </motion.div>
  );
}
