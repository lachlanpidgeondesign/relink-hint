import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-6w9nru9he2";

// ─── Types ───

interface GuessLogEntry {
  groupIdx: number;
  wasCorrect: boolean;
  wrongCountBefore: number;
}

interface EndGameScreenProps {
  guessHistory: boolean[]; // true = correct, false = wrong, in order
  stage1Mistakes: number;
  stage2Mistakes: number;
  totalLives: number;
  livesRemaining: number;
  finalResult: "correct" | "failed";
  relinkAnswer: string[];
  relinkPrefix: string;
  groupColors: {
    bg: string;
    border: string;
    containerBg: string;
    solved: string;
    solvedBorder: string;
    selectedBg: string;
    selectedShadow: string;
  }[];
  groupNames: string[];
  oddWords: string[];
  wrongGuesses: Record<number, string[]>;
  lostDuringFinding: boolean;
  guessLog: GuessLogEntry[];
  relinkAttempts: number[]; // each entry = number of correctly positioned tiles in that attempt
  relinkAnswerLength: number;
  /** True when the puzzle was solved without ever opening a hint. */
  cleanSolve?: boolean;
  onClose: () => void;
}

// ─── SVG Icons ───

function RelinkIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          d={svgPaths.p30b85a00}
          fill="#343D99"
          stroke="#343D99"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.8"
        />
        <path
          d={svgPaths.p26166300}
          fill="#343D99"
          stroke="#343D99"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.8"
        />
        <path
          d={svgPaths.pfb02900}
          fill="#EEF0FF"
          stroke="#343D99"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.8"
        />
        <path
          d={svgPaths.p11f35500}
          fill="#5665FF"
          stroke="#343D99"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}

function ShareIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p245c2480}
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
        <path
          d={svgPaths.p1b9ecd80}
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
        <path
          d={svgPaths.p30483c80}
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
        <path
          d={svgPaths.p2c4e4c80}
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
        <path
          d={svgPaths.p34f41a40}
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
      </svg>
    </div>
  );
}

function FireIcon({ filled }: { filled: boolean }) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        {filled ? (
          <>
            <rect fill="#343D99" height="36" rx="18" width="36" />
            <path d={svgPaths.p65bdbf0} fill="#FCFCFC" />
          </>
        ) : (
          <rect fill="#f5f5f5" height="36" rx="18" width="36" />
        )}
      </svg>
    </div>
  );
}

function BackChevron() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

// ─── Countdown hook ───

function useCountdownToMidnight(): string {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeStr(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
      );
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeStr;
}

// ─── Main Component ───

// Colored square emojis matching group order: purple, blue, green, orange
const GROUP_SQUARES = ["🟪", "🟦", "🟩", "🟧"];

export function EndGameScreen({
  guessHistory,
  stage1Mistakes,
  stage2Mistakes,
  totalLives,
  livesRemaining,
  finalResult,
  relinkAnswer,
  relinkPrefix,
  groupColors,
  groupNames,
  oddWords,
  wrongGuesses,
  lostDuringFinding,
  guessLog,
  relinkAttempts,
  relinkAnswerLength,
  onClose,
}: EndGameScreenProps) {
  const [shareLabel, setShareLabel] = useState("Share");
  const countdown = useCountdownToMidnight();
  const totalMistakes = stage1Mistakes + stage2Mistakes;

  const dateStr = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Build share text with per-guess rows
  const buildShareText = (): string => {
    const lines: string[] = [];
    lines.push("Relink #1");
    lines.push("");

    // Phase 1: each guess gets its own row
    // Format: 3 emojis + space + 1 emoji
    for (const entry of guessLog) {
      const colorEmoji = GROUP_SQUARES[entry.groupIdx] || "🟧";
      const tilesInGroup = 4;

      if (entry.wasCorrect) {
        // Correct guess: colored colored colored + black (no gap)
        const row = colorEmoji.repeat(3) + "⬛";
        lines.push(row);
      } else {
        // Wrong guess: white squares for mistake count, then colored for remainder
        const mistakeCount = entry.wrongCountBefore + 1;
        const coloredCount = tilesInGroup - mistakeCount;
        const row = "⬜".repeat(mistakeCount) + colorEmoji.repeat(coloredCount);
        lines.push(row);
      }
    }

    // Phase 2: show if user reached Stage 2 and had attempts
    if (!lostDuringFinding && relinkAttempts.length > 0) {
      lines.push("➖➖➖➖");
      for (const correctCount of relinkAttempts) {
        const wrongCount = relinkAnswerLength - correctCount;
        const row = "⬛".repeat(correctCount) + "⬜".repeat(wrongCount);
        lines.push(row);
      }
    }

    lines.push("");
    lines.push("Play at: relink.game");

    return lines.join("\n");
  };

  const handleShare = async () => {
    const text = buildShareText();

    // Try Web Share API first (works well on mobile)
    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // User cancelled or not supported, fall through to clipboard
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(text);
      setShareLabel("Copied!");
      setTimeout(() => setShareLabel("Share"), 2500);
    } catch {
      // Last fallback
      setShareLabel("Failed");
      setTimeout(() => setShareLabel("Share"), 2500);
    }
  };

  // Streak data (mock - would come from localStorage in production)
  const streakDays = ["M", "T", "W", "T", "F", "S", "S"];
  const currentStreak = 3; // Mock: completed Mon, Tue, Wed
  const longestStreak = 7;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center z-[55] overflow-auto"
    >
      {/* Spacer to match previous header height */}
      <div className="w-full max-w-[500px] shrink-0 h-[44px]" />

      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-[500px] px-[32px] pb-[32px] flex-1">
        {/* Results Container */}
        <div className="flex flex-col gap-[24px] items-center w-full">
          {/* Puzzle Info + Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex flex-col gap-[16px] items-center"
          >
            {/* Puzzle Info */}
            <div className="flex gap-[8px] items-center justify-center">
              <div className="flex gap-[6px] items-center">
                <RelinkIcon />
                <p className="font-['Literata',serif] font-bold text-[#343d99] text-[18px] whitespace-nowrap">
                  Relink
                </p>
              </div>
              <div className="h-[16px] relative shrink-0 w-0">
                <svg
                  className="block h-full w-[1px]"
                  fill="none"
                  viewBox="0 0 1 17"
                >
                  <path
                    d="M0.5 0.5V16.5"
                    stroke="#666666"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-[#333] text-[16px] text-center whitespace-nowrap">
                {dateStr}
              </p>
            </div>

            {/* Title */}
            <p className="font-['Literata',serif] font-bold text-[#191919] text-[24px] text-center">
              {totalMistakes === 0 && finalResult === "correct"
                ? "Perfect Game!"
                : finalResult === "correct"
                  ? "Level Completed!"
                  : "Game Over"}
            </p>
          </motion.div>

          {/* Results Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="bg-[#9aa3ff] rounded-[16px] w-full"
          >
            <div className="flex flex-col gap-[16px] items-center p-[32px]">
              {/* RESULTS label */}
              <p className="font-semibold text-[#333] text-[16px] text-center">
                RESULTS — Mistakes {totalMistakes}/{totalLives}
              </p>

              {/* Results visual card — per-guess grid */}
              <div className="bg-[#fcfcfc] relative rounded-[8px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#5665ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_#5665ff]"
                />
                <div className="flex flex-col items-start p-[16px]">
                  {/* Phase 1: each guess = one row of 4 emojis */}
                  {(() => {
                    const rows: React.ReactNode[] = [];

                    // Add all actual guesses
                    guessLog.forEach((entry, i) => {
                      const colorEmoji = GROUP_SQUARES[entry.groupIdx] || "🟧";
                      const tilesInGroup = 4;

                      if (entry.wasCorrect) {
                        // Correct guess: colored colored colored + space + black
                        rows.push(
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
                        // Wrong guess: white squares for mistake count, then colored for remainder
                        const mistakeCount = entry.wrongCountBefore + 1;
                        const coloredCount = tilesInGroup - mistakeCount;

                        rows.push(
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
                    });

                    return rows;
                  })()}

                  {/* Phase 2: relink attempts — only if user reached Stage 2 */}
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

              {/* Share button */}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleShare}
                className="flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[50px] cursor-pointer active:scale-95 transition-transform"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[50px]"
                />
                <ShareIcon />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={shareLabel}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.12 }}
                    className="font-semibold text-[#191919] text-[15px] text-center whitespace-nowrap"
                  >
                    {shareLabel}
                  </motion.p>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Next Puzzle countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center py-[4px] w-full"
          >
            <p className="font-semibold text-[#333] text-[16px] text-center whitespace-nowrap">
              Next Puzzle In: {countdown}
            </p>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.45 }}
            className="bg-[#fcfcfc] relative rounded-[16px] w-full"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]"
            />
            <div className="flex flex-col gap-[12px] items-center p-[24px]">
              {/* Streak title */}
              <div className="flex items-center justify-center w-full">
                <div className="flex gap-[8px] items-center justify-center rounded-[4px]">
                  <div className="h-[20px] relative shrink-0 w-[16.429px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 16.4287 20"
                    >
                      <path d={svgPaths.p3ec15b80} fill="#191919" />
                    </svg>
                  </div>
                  <p className="font-['Literata',serif] font-bold text-[#191919] text-[20px] text-center whitespace-nowrap">
                    {currentStreak} day streak
                  </p>
                </div>
              </div>

              {/* Day circles */}
              <div className="flex items-center w-full pr-[1px]">
                {streakDays.map((day, i) => (
                  <React.Fragment key={i}>
                    {/* Day column */}
                    <div className="flex flex-col gap-[9px] items-center shrink-0 w-[36px]">
                      <p className="font-semibold text-[#191919] text-[15px] text-center whitespace-nowrap">
                        {day}
                      </p>
                      <FireIcon filled={i < currentStreak} />
                    </div>
                    {/* Divider between days */}
                    {i < streakDays.length - 1 && (
                      <div className="flex-1 self-stretch flex flex-col items-center justify-end pb-[16px]">
                        <div
                          className="h-[4px] w-full"
                          style={{
                            backgroundColor:
                              i < currentStreak - 1 ? "#343d99" : "#f5f5f5",
                          }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Separator */}
              <div className="h-0 relative w-full">
                <svg
                  className="block w-full h-[1px]"
                  fill="none"
                  viewBox="0 0 311 1"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0.5H310.5"
                    stroke="#CCCCCC"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Longest streak */}
              <p className="text-[#333] text-[16px] text-center">
                <span>Your longest streak: </span>
                <span className="font-semibold">{longestStreak} days</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}