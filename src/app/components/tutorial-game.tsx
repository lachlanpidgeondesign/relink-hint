import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

// ─── Tutorial Puzzle Data ───

interface TGroupData {
  words: string[];
  correctGroupTitle: string;
  correctThree: string[];
  oddWord: string;
}

const TGROUPS: TGroupData[] = [
  { words: ["RED", "YELLOW", "BLUE", "PIZZA"], correctGroupTitle: "Primary Colours", correctThree: ["RED", "YELLOW", "BLUE"], oddWord: "PIZZA" },
  { words: ["FAST", "QUICK", "FRIES", "ZOOM"], correctGroupTitle: "Synonyms for Speed", correctThree: ["FAST", "QUICK", "ZOOM"], oddWord: "FRIES" },
  { words: ["GIN", "FRIED CHICKEN", "WHISKEY", "WINE"], correctGroupTitle: "Alcoholic Drinks", correctThree: ["GIN", "WHISKEY", "WINE"], oddWord: "FRIED CHICKEN" },
  { words: ["FOOD", "MOOD", "RUDE", "BURGER"], correctGroupTitle: "Rhyming Words", correctThree: ["FOOD", "MOOD", "RUDE"], oddWord: "BURGER" },
];

const TRELINK_ANSWER = ["FAST", "FOOD"];

interface TColor {
  bg: string;
  border: string;
  containerBg: string;
  solved: string;
  selectedBg: string;
  selectedShadow: string;
}

const TCOLORS: TColor[] = [
  { bg: "#dedcfa", border: "#9b95f0", containerBg: "#bdb9f5", solved: "#9b95f0", selectedBg: "#7a72eb", selectedShadow: "#352f8a" },
  { bg: "#dbedff", border: "#94caff", containerBg: "#b8dbff", solved: "#94caff", selectedBg: "#71b8ff", selectedShadow: "#2e6499" },
  { bg: "#ccf5eb", border: "#66e0c4", containerBg: "#99ebd8", solved: "#66e0c4", selectedBg: "#00cc9d", selectedShadow: "#007a5e" },
  { bg: "#fdeed8", border: "#f8cd8b", containerBg: "#fadeb1", solved: "#f8cd8b", selectedBg: "#f3ac3d", selectedShadow: "#926725" },
];

// ─── FitText (simplified) ───

function TFitText({
  children,
  maxSize,
  minSize = 7,
  className = "",
  style = {},
  allowWrap = false,
}: {
  children: React.ReactNode;
  maxSize: number;
  minSize?: number;
  className?: string;
  style?: React.CSSProperties;
  allowWrap?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(maxSize);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const recalc = () => {
      if (allowWrap) {
        const container = el.parentElement;
        if (!container) return;
        const cs = getComputedStyle(container);
        const availW = container.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
        const availH = container.clientHeight - (parseFloat(cs.paddingTop) || 0) - (parseFloat(cs.paddingBottom) || 0);
        if (availW <= 0 || availH <= 0) return;
        let size = maxSize;
        el.style.width = availW + "px";
        el.style.height = availH + "px";
        el.style.overflow = "hidden";
        while (size > minSize) {
          el.style.fontSize = size + "px";
          if (el.scrollWidth <= el.clientWidth + 1 && el.scrollHeight <= el.clientHeight + 1) break;
          size = Math.max(minSize, size - 0.5);
        }
        el.style.width = "";
        el.style.height = "";
        el.style.overflow = "";
        setFontSize(size);
      } else {
        el.style.fontSize = maxSize + "px";
        const sw = el.scrollWidth;
        const cw = el.clientWidth;
        if (cw > 0 && sw > cw) {
          setFontSize(Math.max(minSize, Math.floor(((maxSize * cw) / sw) * 2) / 2));
        } else {
          setFontSize(maxSize);
        }
      }
    };
    const raf = requestAnimationFrame(() => recalc());
    const handleResize = () => recalc();
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", handleResize); };
  }, [children, maxSize, minSize, allowWrap]);

  if (allowWrap) {
    return (
      <div ref={ref} className={className} style={{ ...style, fontSize, whiteSpace: "normal", wordBreak: "normal", overflowWrap: "normal", textWrap: "balance" as any }}>
        {children}
      </div>
    );
  }
  return (
    <div ref={ref} className={className} style={{ ...style, fontSize, whiteSpace: "nowrap", overflow: "hidden" }}>
      {children}
    </div>
  );
}

// ─── Helpers ───

const guaranteedShuffle = (arr: string[]): string[] => {
  if (arr.length <= 1) return [...arr];
  const result = [...arr];
  let attempts = 0;
  do {
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    attempts++;
  } while (result.every((v, i) => v === arr[i]) && attempts < 20);
  return result;
};

interface RelinkWord {
  word: string;
  groupIdx: number;
}

const LOCK_PATH = "M19.725 10.5H17.9475V7.4475C17.9475 3.3375 14.6025 0 10.5 0C6.3975 0 3.0525 3.3375 3.0525 7.4475V10.5H1.275C0.57 10.5 0 11.07 0 11.775V22.725C0 23.43 0.57 24 1.275 24H19.725C20.43 24 21 23.43 21 22.725V11.775C21 11.07 20.43 10.5 19.725 10.5ZM5.3025 7.4475C5.3025 4.5825 7.635 2.25 10.5 2.25C13.365 2.25 15.6975 4.5825 15.6975 7.4475V10.5H5.3025V7.4475Z";

type TPhase = "findingOdds" | "transitioning" | "finalGuess" | "complete";

// ─── Tutorial Game Screen ───

export function TutorialGameScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<TPhase>("findingOdds");
  const [selection, setSelection] = useState<{ word: string; groupIdx: number } | null>(null);
  const [solvedRows, setSolvedRows] = useState<number[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<Record<number, string[]>>({});
  const [wordOrders, setWordOrders] = useState<string[][]>(() => TGROUPS.map((g) => [...g.words]));
  const [rowShake, setRowShake] = useState<number | null>(null);
  const [mergingRow, setMergingRow] = useState<number | null>(null);
  const [unlockPhase, setUnlockPhase] = useState<"locked" | "shaking" | "opening" | "unlocked">("locked");

  // Stage 2
  const [selectedRelink, setSelectedRelink] = useState<RelinkWord[]>([]);
  const [prevSubmissions, setPrevSubmissions] = useState<string[]>([]);
  const [answerShake, setAnswerShake] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  // Tooltip
  const [tooltip, setTooltip] = useState<string | null>(null);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hint system - glow after 10s of inactivity
  const [hintTarget, setHintTarget] = useState<{ word: string; groupIdx: number } | null>(null);
  const lastInteractionRef = useRef(Date.now());
  const hintIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetHintTimer = useCallback(() => {
    lastInteractionRef.current = Date.now();
    setHintTarget(null);
  }, []);

  useEffect(() => {
    hintIntervalRef.current = setInterval(() => {
      if (Date.now() - lastInteractionRef.current < 10000) return;
      
      if (phase === "findingOdds") {
        // Hint: oddWord of first unsolved row (top to bottom)
        const nextUnsolved = TGROUPS.findIndex((_, i) => !solvedRows.includes(i));
        if (nextUnsolved >= 0) {
          setHintTarget({ word: TGROUPS[nextUnsolved].oddWord, groupIdx: nextUnsolved });
        }
      } else if (phase === "finalGuess") {
        // Hint: next relink answer tile not yet selected
        // TRELINK_ANSWER words and their group indices
        const relinkTargets: { word: string; groupIdx: number }[] = [
          { word: "FAST", groupIdx: 3 },  // FAST is in group 3's correctThree
          { word: "FOOD", groupIdx: 0 },  // FOOD is in group 0's correctThree
        ];
        const nextTarget = relinkTargets.find(
          (t) => !selectedRelink.some((s) => s.word === t.word && s.groupIdx === t.groupIdx)
        );
        if (nextTarget) {
          setHintTarget(nextTarget);
        }
      }
    }, 1000);

    return () => {
      if (hintIntervalRef.current) clearInterval(hintIntervalRef.current);
    };
  }, [phase, solvedRows, selectedRelink]);

  // Row height
  const [rowHeight, setRowHeight] = useState(60);
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight;
      // Title (~34) + description (~60) + mb (~16) + answer area (~80) + buttons (~52) + padding (~40) + gaps(24)
      const reserved = 306;
      const available = vh - reserved;
      const h = Math.floor(available / 4);
      setRowHeight(Math.max(48, Math.min(72, h)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const showTooltipMsg = useCallback((msg: string, dur = 2000) => {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    setTooltip(msg);
    tooltipTimer.current = setTimeout(() => { setTooltip(null); tooltipTimer.current = null; }, dur);
  }, []);

  const isStage2 = phase === "finalGuess" || phase === "complete";
  const isStage2Active = phase === "finalGuess";

  const canSubmitStage1 = phase === "findingOdds" && selection !== null && rowShake === null && mergingRow === null;

  const isDuplicateRelink = (() => {
    if (selectedRelink.length === 0) return false;
    const key = selectedRelink.map((w) => `${w.groupIdx}:${w.word}`).join("|");
    return prevSubmissions.includes(key);
  })();

  const canSubmitRelink = phase === "finalGuess" && selectedRelink.length === TRELINK_ANSWER.length && !isDuplicateRelink;
  const canClear = phase === "findingOdds" ? selection !== null : isStage2Active ? selectedRelink.length > 0 : false;
  const canSubmit = phase === "findingOdds" ? canSubmitStage1 : canSubmitRelink;

  // ─── Transition to Stage 2 ───
  const transitionToStage2 = useCallback(() => {
    setPhase("transitioning");
    setSelection(null);
    setTimeout(() => setUnlockPhase("shaking"), 50);
    setTimeout(() => setUnlockPhase("opening"), 750);
    setTimeout(() => {
      setUnlockPhase("unlocked");
      setPhase("finalGuess");
    }, 1250);
  }, []);

  // ─── Stage 1 handlers ───
  const handleWordClick = useCallback((groupIdx: number, word: string) => {
    if (phase !== "findingOdds") return;
    if (solvedRows.includes(groupIdx)) return;
    if (rowShake !== null || mergingRow !== null) return;
    const wrongForRow = wrongGuesses[groupIdx] || [];
    if (wrongForRow.includes(word)) return;
    resetHintTimer();
    setSelection((prev) => {
      if (prev && prev.word === word && prev.groupIdx === groupIdx) return null;
      return { word, groupIdx };
    });
  }, [phase, solvedRows, rowShake, mergingRow, wrongGuesses, resetHintTimer]);

  const handleSubmitStage1 = useCallback(() => {
    if (!canSubmitStage1 || selection === null) return;
    resetHintTimer();
    const { word, groupIdx } = selection;
    const group = TGROUPS[groupIdx];
    const isCorrect = word === group.oddWord;

    if (isCorrect) {
      setMergingRow(groupIdx);
      setTimeout(() => {
        const newSolved = [...solvedRows, groupIdx];
        setSolvedRows(newSolved);
        setSelection(null);
        setTimeout(() => {
          setMergingRow(null);
          if (newSolved.length === TGROUPS.length) {
            transitionToStage2();
          }
        }, 300);
      }, 300);
    } else {
      setRowShake(groupIdx);
      setWrongGuesses((prev) => ({
        ...prev,
        [groupIdx]: [...(prev[groupIdx] || []), word],
      }));
      setTimeout(() => {
        setRowShake(null);
        setSelection(null);
      }, 500);
    }
  }, [canSubmitStage1, selection, solvedRows, transitionToStage2, resetHintTimer]);

  // ─── Stage 2 handlers ───
  const handleRelinkTap = useCallback((word: string, groupIdx: number) => {
    if (phase !== "finalGuess") return;
    resetHintTimer();
    setSelectedRelink((prev) => {
      const existing = prev.findIndex((w) => w.word === word && w.groupIdx === groupIdx);
      if (existing >= 0) return prev.filter((_, i) => i !== existing);
      if (prev.length >= TRELINK_ANSWER.length) return prev;
      return [...prev, { word, groupIdx }];
    });
  }, [phase, resetHintTimer]);

  const handleSubmitRelink = useCallback(() => {
    if (!canSubmitRelink) return;
    const key = selectedRelink.map((w) => `${w.groupIdx}:${w.word}`).join("|");
    if (prevSubmissions.includes(key)) { showTooltipMsg("Already guessed this combo"); return; }
    setPrevSubmissions((prev) => [...prev, key]);

    const isCorrect = selectedRelink.length === TRELINK_ANSWER.length &&
      selectedRelink.every((item, i) => item.word === TRELINK_ANSWER[i]);

    if (isCorrect) {
      setPhase("complete");
      setShowConnection(true);
      setShowNextButton(true);
    } else {
      setAnswerShake(true);
      setTimeout(() => setAnswerShake(false), 500);
    }
  }, [canSubmitRelink, selectedRelink, prevSubmissions, showTooltipMsg, onComplete]);

  const handleSubmit = useCallback(() => {
    if (phase === "findingOdds") handleSubmitStage1();
    else if (phase === "finalGuess") handleSubmitRelink();
  }, [phase, handleSubmitStage1, handleSubmitRelink]);

  const handleClear = useCallback(() => {
    resetHintTimer();
    if (phase === "findingOdds") setSelection(null);
    else if (isStage2Active) setSelectedRelink([]);
  }, [phase, isStage2Active, resetHintTimer]);

  const handleShuffle = useCallback(() => {
    resetHintTimer();
    if (phase === "findingOdds") {
      setWordOrders((prev) => {
        const next = prev.map((arr) => [...arr]);
        TGROUPS.forEach((_, idx) => {
          if (!solvedRows.includes(idx)) next[idx] = guaranteedShuffle(next[idx]);
        });
        return next;
      });
    } else if (isStage2Active) {
      setWordOrders((prev) => {
        const next = prev.map((arr) => [...arr]);
        TGROUPS.forEach((group, idx) => {
          const currentThree = next[idx].filter(w => group.correctThree.includes(w));
          const shuffledThree = guaranteedShuffle(currentThree);
          next[idx] = [...shuffledThree, group.oddWord];
        });
        return next;
      });
    }
  }, [phase, solvedRows, isStage2Active, resetHintTimer]);

  const isWordInAnswer = useCallback(
    (word: string, groupIdx: number) => selectedRelink.some((w) => w.word === word && w.groupIdx === groupIdx),
    [selectedRelink]
  );

  const allSolved = solvedRows.length === TGROUPS.length;
  const layoutMode: "interactive" | "guessing" = isStage2 || phase === "transitioning" ? "guessing" : "interactive";
  const oddTileH = rowHeight - 6;

  const descriptionText = phase === "findingOdds" || phase === "transitioning"
    ? <>Select a tile you suspect is an imposter from any of the four rows and tap submit.{"\n\n"}Try to unlink this grid.</>
    : <>The four imposters are also linked.{"\n\n"}Pick two coloured tiles to describe how, then hit 'Submit' to <span className="font-bold">Relink</span> them.</>;

  return (
    <motion.div
      className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center justify-start z-50 overflow-auto"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center px-[16px] pt-[clamp(16px,3vh,24px)] pb-[16px] w-full max-w-[500px]">
        {/* Title & Description */}
        <div className="flex flex-col gap-[clamp(8px,1.5vh,16px)] items-center text-center w-full mb-[clamp(12px,2vh,20px)]">
          <p className="font-['Literata',serif] font-bold text-[#191919] text-[clamp(20px,5vw,24px)] leading-[1.4]">
            Get started
          </p>
          <p className="text-[#191919] text-[clamp(13px,3.5vw,15px)] leading-[1.4] font-normal max-w-[358px] whitespace-pre-wrap text-center">
            {descriptionText}
          </p>
        </div>

        {/* Tooltip */}
        <div className="h-0 relative w-full flex justify-center z-20">
          <div className="absolute top-[4px] z-10">
            <AnimatePresence>
              {tooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#333] rounded-[20px] px-[20px] py-[10px] shadow-lg"
                >
                  <p className="font-semibold leading-[20px] text-[15px] text-white text-center whitespace-nowrap">{tooltip}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ─── GRID AREA ─── */}
        <LayoutGroup id="tutorial">
          {allSolved ? (
            /* All rows solved: CSS grid with odd column */
            <div
              className="grid gap-x-[9px] gap-y-[8px] py-[8px] shrink-0 w-full px-[clamp(4px,2vw,16px)]"
              style={{
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gridTemplateRows: `repeat(4, ${rowHeight}px)`,
              }}
            >
              {/* 3-word containers */}
              {TGROUPS.map((group, groupIdx) => {
                const colors = TCOLORS[groupIdx];
                const words = wordOrders[groupIdx];
                const isGuessing = layoutMode === "guessing";
                return (
                  <motion.div
                    key={`container-${groupIdx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                    className="relative rounded-[16px]"
                    style={{ gridColumn: "1 / 4", gridRow: groupIdx + 1, backgroundColor: colors.containerBg }}
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="flex gap-[4px] items-end p-[8px] relative size-full overflow-visible">
                        {words.filter((w) => group.correctThree.includes(w)).map((word) => {
                          const isInAns = isGuessing && isWordInAnswer(word, groupIdx);
                          const tileBg = isInAns ? colors.selectedBg : isGuessing ? colors.bg : colors.containerBg;
                          const isHintedRelink = isGuessing && !isInAns && hintTarget?.word === word && hintTarget?.groupIdx === groupIdx;
                          return (
                            <div key={word} className="flex-[1_0_0] min-w-px h-full flex items-end">
                              <motion.div
                                layoutId={`ttile-${groupIdx}-${word}`}
                                onClick={isGuessing ? () => handleRelinkTap(word, groupIdx) : undefined}
                                className={`w-full relative rounded-[8px] select-none ${isGuessing ? "cursor-pointer" : ""} ${isHintedRelink ? "hint-glow" : ""}`}
                                style={{ backgroundColor: tileBg }}
                                initial={false}
                                animate={{ height: isInAns ? "calc(100% + 4px)" : "100%" }}
                                transition={{ type: "spring", stiffness: 400, damping: 30, layout: { duration: 0.45, ease: "easeInOut" } }}
                              >
                                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                    <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-center w-full" style={{ color: isInAns ? "white" : "#333" }}>
                                      {word}
                                    </TFitText>
                                  </div>
                                </div>
                                {isInAns && (
                                  <div
                                    aria-hidden="true"
                                    className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
                                    style={{ borderColor: colors.selectedShadow, boxShadow: `0px 4px 0px 0px ${colors.selectedShadow}` }}
                                  />
                                )}
                              </motion.div>
                            </div>
                          );
                        })}
                        {/* Group label */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.35, delay: 0.2 }}
                          className="-translate-x-1/2 absolute flex items-center justify-center left-1/2 px-[6px] py-[2px] rounded-[4px] top-0"
                          style={{ backgroundColor: colors.solved }}
                        >
                          <TFitText maxSize={13} minSize={8} className="font-bold leading-[normal] text-[#333] text-center whitespace-nowrap">
                            {group.correctGroupTitle.toUpperCase()}
                          </TFitText>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Odd column */}
              <motion.div
                className="rounded-[8px] flex flex-col px-[6px]"
                style={{ gridColumn: 4, gridRow: "1 / -1" }}
                initial={false}
                animate={{ backgroundColor: showConnection ? "#333" : "#ccc" }}
                transition={{ duration: 0.5 }}
              >
                {TGROUPS.map((group, groupIdx) => (
                  <div
                    key={group.oddWord}
                    className="flex-1 flex flex-col items-center justify-center relative"
                    style={{ padding: "3px 0" }}
                  >
                    <motion.div
                      layoutId={`ttile-${groupIdx}-${group.oddWord}`}
                      className="bg-[#333] relative rounded-[8px] w-full"
                      style={{ height: oddTileH }}
                      initial={false}
                      animate={{ opacity: showConnection ? 0 : 1 }}
                      transition={{ duration: 0.4, layout: { duration: 0.45, ease: "easeInOut" } }}
                    >
                      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex flex-col items-center justify-center p-[4px] size-full">
                          <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                            {group.oddWord}
                          </TFitText>
                        </div>
                      </div>
                    </motion.div>
                    {showConnection && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute flex items-center justify-center px-[4px]"
                      >
                        <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                          {group.oddWord}
                        </TFitText>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            /* Stage 1: interactive rows */
            <div className="flex flex-col gap-[8px] items-start py-[8px] shrink-0 w-full px-[clamp(4px,2vw,16px)]">
              {TGROUPS.map((group, groupIdx) => {
                const colors = TCOLORS[groupIdx];
                const words = wordOrders[groupIdx];
                const isSolved = solvedRows.includes(groupIdx);
                const wrongForRow = wrongGuesses[groupIdx] || [];

                if (isSolved) {
                  return (
                    <div
                      key={`solved-${groupIdx}`}
                      className="gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] relative w-full"
                      style={{ height: rowHeight }}
                    >
                      {/* Link Container */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0"
                        style={{ backgroundColor: colors.containerBg }}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="flex gap-[4px] items-end p-[8px] relative size-full overflow-visible">
                            {words.filter((w) => group.correctThree.includes(w)).map((word) => (
                              <div key={word} className="flex-[1_0_0] min-w-px h-full flex items-end">
                                <motion.div
                                  layoutId={`ttile-${groupIdx}-${word}`}
                                  className="w-full relative rounded-[8px] h-full"
                                  style={{ backgroundColor: colors.containerBg }}
                                  transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                                >
                                  <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                    <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                      <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#333] text-center w-full">
                                        {word}
                                      </TFitText>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            ))}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.35, delay: 0.2 }}
                              className="-translate-x-1/2 absolute flex items-center justify-center left-1/2 px-[6px] py-[2px] rounded-[4px] top-0"
                              style={{ backgroundColor: colors.solved }}
                            >
                              <TFitText maxSize={13} minSize={8} className="font-bold leading-[normal] text-[#333] text-center whitespace-nowrap">
                                {group.correctGroupTitle.toUpperCase()}
                              </TFitText>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                      {/* Odd tile */}
                      <div
                        className="col-4 flex flex-col items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0"
                        style={{ paddingTop: 3, paddingBottom: 3 }}
                      >
                        <motion.div
                          layoutId={`ttile-${groupIdx}-${group.oddWord}`}
                          className="bg-[#333] relative rounded-[8px] w-full"
                          style={{ height: oddTileH }}
                          transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                        >
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="flex flex-col items-center justify-center p-[4px] size-full">
                              <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                                {group.oddWord}
                              </TFitText>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={`unsolved-${groupIdx}`}
                    className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] w-full shrink-0"
                    animate={rowShake === groupIdx ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                    transition={rowShake === groupIdx ? { duration: 0.45, ease: "easeInOut" } : { duration: 0.1 }}
                  >
                    {words.map((word) => {
                      const isSelected = selection?.word === word && selection?.groupIdx === groupIdx;
                      const isWrong = wrongForRow.includes(word);
                      let bgColor = colors.bg;
                      let textColor = "#191919";
                      let borderColor = colors.border;
                      if (isSelected) { bgColor = "#333"; textColor = "#fcfcfc"; borderColor = "#333"; }
                      const isClickable = !isWrong && rowShake === null && mergingRow === null;
                      const isHinted = hintTarget?.word === word && hintTarget?.groupIdx === groupIdx;

                      return (
                        <motion.div
                          key={word}
                          layout
                          layoutId={`ttile-${groupIdx}-${word}`}
                          onClick={isClickable ? () => handleWordClick(groupIdx, word) : undefined}
                          animate={{ scale: 1, opacity: isWrong ? 0.35 : 1 }}
                          transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                          className={`justify-self-stretch rounded-[8px] row-1 shrink-0 relative select-none ${isClickable ? "cursor-pointer" : "cursor-default"} ${isHinted ? "hint-glow" : ""}`}
                          style={{ backgroundColor: bgColor, height: rowHeight }}
                        >
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="flex flex-col items-center justify-center p-[4px] size-full">
                              <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-center w-full" style={{ color: textColor }}>
                                {word}
                              </TFitText>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor }} />
                          {isWrong && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12M4 4L12 12" stroke="#999" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Connection bar */}
          <AnimatePresence>
            {showConnection && (
              <motion.div
                key="connection-bar"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full px-[clamp(4px,2vw,16px)] pb-[8px]"
              >
                <div className="bg-[#333] h-[52px] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="flex gap-[6px] items-center">
                      <motion.p
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="font-bold leading-[normal] text-[#fcfcfc] text-[13px] text-center whitespace-nowrap uppercase"
                      >
                        Kinds of
                      </motion.p>
                      {TRELINK_ANSWER.map((word, i) => {
                        const gIdx = TGROUPS.findIndex((g) => g.correctThree.includes(word));
                        const color = gIdx >= 0 ? TCOLORS[gIdx].solved : "#ccc";
                        return (
                          <motion.div
                            key={word}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                            className="px-[6px] py-[2px] rounded-[4px]"
                            style={{ backgroundColor: color }}
                          >
                            <p className="font-bold leading-[normal] text-[#333] text-[13px] text-center whitespace-nowrap">{word}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>

        {/* Answer area */}
        {!showConnection && (
          <div className="relative w-full py-[8px] px-[clamp(4px,2vw,16px)]">
            <motion.div
              className="w-full"
              animate={{ opacity: isStage2Active ? 1 : (phase === "transitioning" && unlockPhase === "unlocked") ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-[#ccc] relative rounded-[8px]"
                animate={answerShake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                transition={answerShake ? { duration: 0.45, ease: "easeInOut" } : { duration: 0.1 }}
              >
                <div className="gap-x-[6px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] p-[8px] relative w-full">
                  {Array.from({ length: TRELINK_ANSWER.length }).map((_, slotIdx) => {
                    const item = selectedRelink[slotIdx];
                    const itemColors = item ? TCOLORS[item.groupIdx] : null;
                    return (
                      <div
                        key={slotIdx}
                        className="relative rounded-[8px]"
                        style={{ height: rowHeight - 16 }}
                      >
                        <div className="bg-[#fcfcfc] absolute inset-0 rounded-[8px]" />
                        <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
                        {item && itemColors && (
                          <div className="flex flex-col items-center overflow-visible pt-[4px] px-[4px] pb-[6px] rounded-[inherit] size-full relative z-10">
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => handleRelinkTap(item.word, item.groupIdx)}
                              className="relative rounded-[8px] shrink-0 w-full h-full select-none cursor-pointer"
                              style={{ backgroundColor: itemColors.selectedBg }}
                            >
                              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                  <TFitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-white text-center w-full">{item.word}</TFitText>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor: itemColors.selectedShadow, boxShadow: `0px 4px 0px 0px ${itemColors.selectedShadow}` }} />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Lock overlay */}
            <AnimatePresence>
              {unlockPhase !== "unlocked" && (
                <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  <motion.div
                    animate={
                      unlockPhase === "shaking"
                        ? { rotate: [0, -12, 12, -10, 10, -6, 6, -3, 3, 0], scale: [1, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.02, 1.02, 1] }
                        : unlockPhase === "opening"
                        ? { scale: [1, 1.4, 0], opacity: [1, 1, 0], rotate: [0, 0, 15], y: [0, -10, -30] }
                        : { scale: 1, rotate: 0, opacity: 1 }
                    }
                    transition={
                      unlockPhase === "shaking"
                        ? { duration: 0.7, ease: "easeInOut" }
                        : unlockPhase === "opening"
                        ? { duration: 0.5, ease: "easeOut" }
                        : { duration: 0.1 }
                    }
                  >
                    <svg width={24} height={24} viewBox="0 0 21 24" fill="none">
                      <path d={LOCK_PATH} fill="#333333" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Buttons */}
        {!showConnection && (
          <div className="flex gap-[8px] items-center pt-[8px] px-[4px] pb-[16px] w-full justify-center">
            <TutorialButton onClick={handleSubmit} disabled={!canSubmit} label="Submit" />
          </div>
        )}
        {showNextButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            className="flex flex-col gap-[12px] items-center justify-center pt-[8px] px-[4px] pb-[16px] w-full"
          >
            <p className="text-[#191919] text-[15px] leading-[1.4] font-normal text-center">
              Now you're ready for a real challenge
            </p>
            <button
              onClick={onComplete}
              className="bg-[#191919] flex items-center justify-center px-[24px] py-[12px] rounded-[50px] cursor-pointer active:scale-95 transition-transform"
            >
              <span className="font-bold text-[#fcfcfc] text-[15px] text-center leading-[22px]">
                Play today's puzzle
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function TutorialButton({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  const isEnabled = !disabled;
  return (
    <div className={`flex-[1_0_0] min-h-px min-w-px pb-[2px] ${disabled ? "opacity-40" : ""}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full h-[36px] rounded-[50px] relative font-semibold text-[15px] text-[#191919] text-center transition-transform ${
          isEnabled ? "bg-[#dde0ff] cursor-pointer active:scale-95" : "bg-[#ccc] cursor-default"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[50px] ${
            isEnabled ? "border-[#9aa3ff] shadow-[0px_2px_0px_0px_#9aa3ff]" : "border-[#ccc] shadow-[0px_2px_0px_0px_#ccc]"
          }`}
        />
        <div className="flex items-center justify-center size-full">
          <p className="leading-[20px]">{label}</p>
        </div>
      </button>
    </div>
  );
}