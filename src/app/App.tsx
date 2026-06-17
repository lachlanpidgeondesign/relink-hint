import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import svgPaths from "../imports/svg-inde6qg0rj";
import { imgGroup } from "../imports/svg-4a0m3";
import lockSvg from "../imports/svg-j06rs23j3u";
import chainSvg from "../imports/svg-fmn5sz0424";
import chainIcon from "figma:asset/1d672781fab7fe549532bcd9fccfb4c9cc4e9908.png";
import introSvgPaths from "../imports/svg-dfxf0rc6rv";
import { EndGameScreen } from "./components/end-game-screen";
import { CompactResultsScreen } from "./components/compact-results-screen";
import { ResultsComparison } from "./components/results-comparison";
import { RelinkAnimation } from "./components/RelinkAnimation";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// ─── Puzzle Data ───

interface GroupData {
  groupName: string;
  words: string[];
  correctGroupTitle: string;
  correctThree: string[];
  oddWord: string;
  /** Hint-mode clue for this row (points at the imposter / row theme). */
  clue: string;
}

const PUZZLE_GROUPS: GroupData[] = [
  {
    groupName: "Group 1",
    words: ["VISTA", "NATIONAL", "EXPANSE", "LANDSCAPE"],
    correctGroupTitle: "A sweeping view",
    correctThree: ["VISTA", "EXPANSE", "LANDSCAPE"],
    oddWord: "NATIONAL",
    clue: "Why you'd pull the car over on a coastal road.",
  },
  {
    groupName: "Group 2",
    words: ["SHEEP", "LEMMING", "DRONE", "CHEQUERED"],
    correctGroupTitle: "Mindless followers",
    correctThree: ["SHEEP", "LEMMING", "DRONE"],
    oddWord: "CHEQUERED",
    clue: "Each follows the one in front, no questions asked.",
  },
  {
    groupName: "Group 3",
    words: ["RED", "BLUE", "ORANGE", "PURPLE"],
    correctGroupTitle: "Colours in this puzzle",
    correctThree: ["BLUE", "ORANGE", "PURPLE"],
    oddWord: "RED",
    clue: "The palette of this very puzzle, minus the one you're reading.",
  },
  {
    groupName: "Group 4",
    words: ["WHITE", "FLAG", "TAD", "TOTEM"],
    correctGroupTitle: "Precede 'pole'",
    correctThree: ["FLAG", "TAD", "TOTEM"],
    oddWord: "WHITE",
    clue: "Each is hunting the same word for a long, vertical rod.",
  },
];

const FINAL_CONNECTION = "Flag";
const RELINK_ANSWER = ["FLAG"];
const RELINK_PREFIX = "";
const RELINK_SUFFIX = "";
// Hint-mode clue for the Relink connection (the four imposters all precede this word).
const RELINK_CLUE = "What you raise to surrender, to warn, or to win.";

interface GroupColor {
  bg: string;
  border: string;
  containerBg: string;
  solved: string;
  solvedBorder: string;
  selectedBg: string;
  selectedShadow: string;
}

// Colors: purple, blue, green, orange
const GROUP_COLORS: GroupColor[] = [
  { bg: "#dedcfa", border: "#9b95f0", containerBg: "#bdb9f5", solved: "#9b95f0", solvedBorder: "#7a72eb", selectedBg: "#7a72eb", selectedShadow: "#352f8a" },
  { bg: "#dbedff", border: "#94caff", containerBg: "#b8dbff", solved: "#94caff", solvedBorder: "#71b8ff", selectedBg: "#71b8ff", selectedShadow: "#2e6499" },
  { bg: "#ccf5eb", border: "#66e0c4", containerBg: "#99ebd8", solved: "#66e0c4", solvedBorder: "#00cc9d", selectedBg: "#00cc9d", selectedShadow: "#007a5e" },
  { bg: "#fdeed8", border: "#f8cd8b", containerBg: "#fadeb1", solved: "#f8cd8b", solvedBorder: "#f3ac3d", selectedBg: "#f3ac3d", selectedShadow: "#926725" },
];

// ─── Helpers ───

interface RelinkWord {
  word: string;
  groupIdx: number;
}

const checkRelinkAnswer = (selected: RelinkWord[]): boolean => {
  if (selected.length !== RELINK_ANSWER.length) return false;
  // Check if it matches the canonical order
  const matchesCanonical = selected.every((item, i) => item.word === RELINK_ANSWER[i]);
  if (matchesCanonical) return true;
  // Check if it matches the reversed order (TIE, NECK)
  const matchesReversed = selected.every((item, i) => item.word === RELINK_ANSWER[RELINK_ANSWER.length - 1 - i]);
  return matchesReversed;
};

/** Shuffle array, guaranteeing a different order from the original (if possible) */
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

// ─── FitText ───

function FitText({
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

// ─── Icons ───

function ChainIcon() {
  return (
    <img src={chainIcon} alt="Chain link" className="shrink-0 size-[28px] object-contain" />
  );
}

function MoreIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[41.67%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3.33333">
          <path d={chainSvg.p3971cf00} fill="#191919" stroke="#191919" strokeWidth="0.833333" />
        </svg>
      </div>
    </div>
  );
}

function LockIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 24" fill="none">
      <path d={lockSvg.p35cd9500} fill="#333333" />
    </svg>
  );
}

// ─── Hint Mode (lightbulb) ───

function LightbulbIcon({ size = 16, color = "#5b4bd6", filled = false }: { size?: number; color?: string; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.9 1 1 1.7l.1.5h5l.1-.5c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3Z"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 18.5h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 21h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Brand-purple palette for the Relink (tray) hint — reuses existing app purples.
const RELINK_HINT_COLORS = {
  frame: "#9aa3ff",
  bubbleBg: "#dde0ff",
  bubbleBorder: "#9aa3ff",
  bubbleText: "#343d99",
};

/**
 * Hint overlay for a single row (or the answer tray). Renders, with no layout
 * shift: a colour frame (CSS outline), a corner lightbulb icon, and an
 * optional clue bubble. Colours are passed in so each instance matches its row.
 */
function RowHintFrame({
  frameColor,
  iconColor,
  bubbleBg,
  bubbleBorder,
  bubbleText,
  ariaLabel,
  clue,
  isOpen,
  isRevealed,
  onToggle,
  direction,
  reducedMotion,
  radius = 12,
}: {
  frameColor: string;
  iconColor: string;
  bubbleBg: string;
  bubbleBorder: string;
  bubbleText: string;
  ariaLabel: string;
  clue: string;
  isOpen: boolean;
  isRevealed: boolean;
  onToggle: () => void;
  direction: "up" | "down";
  reducedMotion: boolean;
  radius?: number;
}) {
  return (
    <>
      {/* Colour frame — CSS outline + offset, never affects layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ borderRadius: radius, outline: `1.5px solid ${frameColor}`, outlineOffset: 2 }}
      />

      {/* Corner lightbulb icon (≥44px tap target, visual circle nestled in the corner) */}
      <button
        type="button"
        onClick={onToggle}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        className="absolute -top-[20px] -right-[6px] z-[20] flex size-[44px] items-center justify-center"
      >
        <span
          className="flex size-[26px] items-center justify-center rounded-full shadow-sm transition-transform active:scale-90"
          style={{ backgroundColor: isRevealed ? iconColor : "#fcfcfc", border: `1.5px solid ${iconColor}` }}
        >
          <LightbulbIcon size={15} color={isRevealed ? "#fcfcfc" : iconColor} filled={isRevealed} />
        </span>
      </button>

      {/* Clue bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="status"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: direction === "down" ? -6 : 6, scale: 0.96 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: direction === "down" ? -6 : 6, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 z-[40] w-[min(260px,80vw)]"
            style={{ [direction === "down" ? "top" : "bottom"]: "calc(100% + 12px)" }}
          >
            <div
              className="relative rounded-[12px] px-[14px] py-[10px] shadow-lg"
              style={{ backgroundColor: bubbleBg, border: `1.5px solid ${bubbleBorder}` }}
            >
              <button
                type="button"
                onClick={onToggle}
                aria-label="Close hint"
                className="absolute -top-[14px] -right-[14px] flex size-[44px] items-center justify-center"
              >
                <span
                  className="flex size-[24px] items-center justify-center rounded-full"
                  style={{ backgroundColor: bubbleBg, border: `1.5px solid ${bubbleBorder}` }}
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2 L10 10 M10 2 L2 10" stroke={bubbleText} strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <p className="pr-[4px] text-[14px] font-normal italic leading-[19px]" style={{ color: bubbleText }}>
                {clue}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Header ───

function PuzzleHeader({ hintMode, onToggleHint }: { hintMode: boolean; onToggleHint: () => void }) {
  return (
    <div className="bg-[#dde0ff] w-full flex justify-center shrink-0">
      <div className="flex h-[44px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-full max-w-[500px]">
        <div aria-hidden="true" className="absolute border-[#9aa3ff] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-start shrink-0 w-[116px]">
          <button
            type="button"
            onClick={onToggleHint}
            aria-label="Toggle hint mode"
            aria-pressed={hintMode}
            className="flex size-[44px] -ml-[8px] items-center justify-center cursor-pointer active:scale-95 transition-transform"
          >
            <div
              className={cn(
                "flex h-[28px] items-center justify-center px-[7px] relative rounded-[99px] shrink-0 transition-colors",
                hintMode ? "bg-[#9aa3ff]" : "bg-[#fcfcfc]"
              )}
            >
              <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[99px]" />
              <LightbulbIcon size={16} color={hintMode ? "#fcfcfc" : "#5b4bd6"} filled={hintMode} />
            </div>
          </button>
        </div>
        <ChainIcon />
        <div className="flex gap-[16px] items-center justify-end shrink-0 w-[116px]">
          <div className="bg-[#fcfcfc] flex h-[28px] items-center px-[4px] py-[6px] relative rounded-[99px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[99px]" />
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function LivesDots({ remaining, total }: { remaining: number; total: number }) {
  return (
    <div className="flex gap-[6px] items-center justify-center px-[16px] py-[8px] w-full">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div key={i} initial={false} animate={{ scale: i < remaining ? 1 : 0.8 }} className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill={i < remaining ? "#666666" : "#E3E3E3"} r="5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function TooltipPopup({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -8 }}
      transition={{ duration: 0.25 }}
      className="bg-[#333] rounded-[20px] px-[20px] py-[10px] shadow-lg"
    >
      <p className="font-semibold leading-[20px] text-[15px] text-white text-center whitespace-nowrap">{message}</p>
    </motion.div>
  );
}

function BetterLuckPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{
        opacity: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-[#333] rounded-[20px] px-[20px] py-[10px] shadow-lg"
    >
      <p className="font-semibold leading-[20px] text-[15px] text-white text-center whitespace-nowrap">Better luck next time</p>
    </motion.div>
  );
}

type GamePhase = "findingOdds" | "transitioning" | "finalGuess" | "complete" | "gameOver";

// ─── Buttons ───

function GameButton({ onClick, disabled, label, active = false }: { onClick: () => void; disabled: boolean; label: string; active?: boolean }) {
  const isEnabled = !disabled;
  return (
    <div className={cn("flex-[1_0_0] min-h-px min-w-px pb-[2px]", disabled && "opacity-40")}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "w-full h-[36px] rounded-[50px] relative font-semibold text-[15px] text-[#191919] text-center transition-transform",
          isEnabled ? "bg-[#dde0ff] cursor-pointer active:scale-95" : "bg-[#ccc] cursor-default"
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute border border-solid inset-0 pointer-events-none rounded-[50px]",
            isEnabled ? "border-[#9aa3ff] shadow-[0px_2px_0px_0px_#9aa3ff]" : "border-[#ccc] shadow-[0px_2px_0px_0px_#ccc]"
          )}
        />
        <div className="flex items-center justify-center size-full">
          <p className="leading-[20px]">{label}</p>
        </div>
      </button>
    </div>
  );
}

// ─── Solved Row (3+1 layout) ───

function SolvedRow({
  group,
  groupIdx,
  colors,
  wordOrders,
  hideOddTile,
  isGuessing,
  isWordInAnswer,
  onRelinkTap,
  rowHeight,
  hint,
  hintElevated = false,
}: {
  group: GroupData;
  groupIdx: number;
  colors: GroupColor;
  wordOrders: string[];
  hideOddTile: boolean;
  isGuessing: boolean;
  isWordInAnswer: (word: string, groupIdx: number) => boolean;
  onRelinkTap?: (word: string, groupIdx: number) => void;
  rowHeight: number;
  hint?: React.ReactNode;
  hintElevated?: boolean;
}) {
  const oddTileHeight = rowHeight - 6;
  const oddPadY = 3; // (rowHeight - oddTileHeight) / 2
  return (
    <div
      className="gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] relative w-full"
      style={{ height: rowHeight, zIndex: hintElevated ? 40 : undefined }}
    >
      {hint}
      {/* Link Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
        className="col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0"
        style={{ backgroundColor: colors.containerBg }}
      >
        <div className="flex flex-row items-center size-full">
          <div className="flex gap-[4px] items-end p-[8px] relative size-full overflow-visible">
            {wordOrders.filter((w) => group.correctThree.includes(w)).map((word) => {
              const isInAns = isGuessing && isWordInAnswer(word, groupIdx);
              // When not guessing, tiles blend into container
              const tileBg = isInAns ? colors.selectedBg : isGuessing ? colors.bg : colors.containerBg;
              return (
                <div key={word} className="flex-[1_0_0] min-w-px h-full flex items-end">
                  <motion.div
                    layoutId={`tile-${groupIdx}-${word}`}
                    onClick={isGuessing && onRelinkTap ? () => onRelinkTap(word, groupIdx) : undefined}
                    className={cn("w-full relative rounded-[8px] select-none", isGuessing && "cursor-pointer")}
                    style={{ backgroundColor: tileBg }}
                    initial={false}
                    animate={{ height: isInAns ? "calc(100% + 4px)" : "100%" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, layout: { duration: 0.45, ease: "easeInOut" } }}
                  >
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="flex flex-col items-center justify-center p-[4px] size-full">
                        <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-center w-full" style={{ color: isInAns ? "white" : "#333" }}>
                          {word}
                        </FitText>
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
              <FitText maxSize={13} minSize={8} className="font-bold leading-[normal] text-[#333] text-center whitespace-nowrap">
                {group.correctGroupTitle.toUpperCase()}
              </FitText>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Odd Container */}
      <div
        className="col-4 flex flex-col items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0"
        style={{ opacity: hideOddTile ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="bg-[#ccc] rounded-[8px] w-full h-full flex flex-col items-center justify-center px-[6px]"
          style={{ paddingTop: oddPadY + 4, paddingBottom: oddPadY + 4 }}
        >
          <motion.div
            layoutId={`tile-${groupIdx}-${group.oddWord}`}
            className="bg-[#333] relative rounded-[8px] w-full"
            style={{ height: oddTileHeight }}
            transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
          >
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="flex flex-col items-center justify-center p-[4px] size-full">
                <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                  {group.oddWord}
                </FitText>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── How To Play Screen ───

// ─── Intro Screen ───

function IntroScreen({ onStart }: { onStart: () => void }) {
  const dateStr = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="fixed inset-0 bg-[#9aa3ff] flex items-center justify-center z-[60]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-[32px] items-center w-[278px]">
        {/* Icon */}
        <div className="relative shrink-0 size-[160px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
            <path d={introSvgPaths.p36629380} fill="#343D99" stroke="#343D99" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
            <path d={introSvgPaths.p34520700} fill="#343D99" stroke="#343D99" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
            <path d={introSvgPaths.p1bf00d00} fill="#EEF0FF" stroke="#343D99" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
            <path d={introSvgPaths.p21678e30} fill="#5665FF" stroke="#343D99" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[12px] items-center text-center">
          <p className="font-['Literata',serif] font-extrabold leading-[41px] text-[#343d99] text-[40px]">Relink</p>
          <p className="font-normal leading-[20px] text-[#333] text-[15px]">Find the imposters then relink them!</p>
        </div>

        {/* Date */}
        <p className="font-bold leading-[20px] text-[#191919] text-[15px] text-center">{dateStr}</p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="bg-[#191919] flex items-center justify-center px-[24px] py-[12px] rounded-[50px] cursor-pointer active:scale-95 transition-transform"
        >
          <p className="font-semibold leading-[20px] text-[#fcfcfc] text-[15px] text-center">Start game</p>
        </button>
      </div>
    </motion.div>
  );
}

// ─── Game State Storage ───

interface SavedGameState {
  guessHistory: boolean[];
  stage1Mistakes: number;
  stage2Mistakes: number;
  totalLives: number;
  livesRemaining: number;
  finalResult: "correct" | "failed";
  wrongGuesses: Record<number, string[]>;
  lostDuringFinding: boolean;
  guessLog: { groupIdx: number; wasCorrect: boolean; wrongCountBefore: number }[];
  relinkAttempts: number[];
  /** True when the puzzle was solved without ever opening a hint. */
  cleanSolve?: boolean;
  /** Number of hints opened during the game. */
  hintsUsed?: number;
}

function loadSavedGame(): SavedGameState | null {
  try {
    const saved = localStorage.getItem('relink-user-results');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function saveGame(state: SavedGameState): void {
  try {
    localStorage.setItem('relink-user-results', JSON.stringify(state));
  } catch {
    // Ignore storage errors
  }
}

// ─── Main App ───

export default function App() {
  const initialLives = 4;

  // Check for results page route
  const currentPath = window.location.hash || '#/';

  // If on /results-comparison page, show both results side by side
  if (currentPath === '#/results-comparison' || currentPath === '#/results-comparison-b') {
    const savedGame = loadSavedGame();
    const isFlipped = currentPath === '#/results-comparison-b';

    if (savedGame) {
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center font-sans">
          <ResultsComparison
            guessLog={savedGame.guessLog}
            relinkAttempts={savedGame.relinkAttempts}
            relinkAnswerLength={RELINK_ANSWER.length}
            lostDuringFinding={savedGame.lostDuringFinding}
            finalResult={savedGame.finalResult}
            groupColors={GROUP_COLORS}
            flipped={isFlipped}
          />
        </div>
      );
    } else {
      // No saved results
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center justify-center font-sans">
          <div className="text-center px-[24px]">
            <h1 className="font-['Literata',serif] font-bold text-[32px] text-[#191919] mb-[16px]">No Results Found</h1>
            <p className="text-[#666] text-[15px] mb-[24px]">You haven't completed a game yet.</p>
            <button
              onClick={() => {
                window.location.hash = '#/';
                window.location.reload();
              }}
              className="bg-[#191919] text-white px-[24px] py-[12px] rounded-[50px] font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              Play Game
            </button>
          </div>
        </div>
      );
    }
  }

  // If on /results-compact page, show compact saved results
  if (currentPath === '#/results-compact') {
    const savedGame = loadSavedGame();

    if (savedGame) {
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center font-sans">
          <CompactResultsScreen
            guessHistory={savedGame.guessHistory}
            stage1Mistakes={savedGame.stage1Mistakes}
            stage2Mistakes={savedGame.stage2Mistakes}
            totalLives={savedGame.totalLives}
            livesRemaining={savedGame.livesRemaining}
            finalResult={savedGame.finalResult}
            relinkAnswer={RELINK_ANSWER}
            relinkPrefix={RELINK_PREFIX}
            groupColors={GROUP_COLORS}
            groupNames={PUZZLE_GROUPS.map((g) => g.correctGroupTitle)}
            oddWords={PUZZLE_GROUPS.map((g) => g.oddWord)}
            wrongGuesses={savedGame.wrongGuesses}
            lostDuringFinding={savedGame.lostDuringFinding}
            guessLog={savedGame.guessLog}
            relinkAttempts={savedGame.relinkAttempts}
            relinkAnswerLength={RELINK_ANSWER.length}
            onClose={() => {
              window.location.hash = '#/';
              window.location.reload();
            }}
          />
        </div>
      );
    } else {
      // No saved results
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center justify-center font-sans">
          <div className="text-center px-[24px]">
            <h1 className="font-['Literata',serif] font-bold text-[32px] text-[#191919] mb-[16px]">No Results Found</h1>
            <p className="text-[#666] text-[15px] mb-[24px]">You haven't completed a game yet.</p>
            <button
              onClick={() => {
                window.location.hash = '#/';
                window.location.reload();
              }}
              className="bg-[#191919] text-white px-[24px] py-[12px] rounded-[50px] font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              Play Game
            </button>
          </div>
        </div>
      );
    }
  }

  // If on /results page, show saved results
  if (currentPath === '#/results') {
    const savedGame = loadSavedGame();

    if (savedGame) {
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center font-sans">
          <EndGameScreen
            cleanSolve={savedGame.cleanSolve}
            hintsUsed={savedGame.hintsUsed}
            guessHistory={savedGame.guessHistory}
            stage1Mistakes={savedGame.stage1Mistakes}
            stage2Mistakes={savedGame.stage2Mistakes}
            totalLives={savedGame.totalLives}
            livesRemaining={savedGame.livesRemaining}
            finalResult={savedGame.finalResult}
            relinkAnswer={RELINK_ANSWER}
            relinkPrefix={RELINK_PREFIX}
            groupColors={GROUP_COLORS}
            groupNames={PUZZLE_GROUPS.map((g) => g.correctGroupTitle)}
            oddWords={PUZZLE_GROUPS.map((g) => g.oddWord)}
            wrongGuesses={savedGame.wrongGuesses}
            lostDuringFinding={savedGame.lostDuringFinding}
            guessLog={savedGame.guessLog}
            relinkAttempts={savedGame.relinkAttempts}
            relinkAnswerLength={RELINK_ANSWER.length}
            onClose={() => {
              window.location.hash = '#/';
              window.location.reload();
            }}
          />
        </div>
      );
    } else {
      // No saved results
      return (
        <div className="w-full h-dvh bg-[#fcfcfc] flex flex-col items-center justify-center font-sans">
          <div className="text-center px-[24px]">
            <h1 className="font-['Literata',serif] font-bold text-[32px] text-[#191919] mb-[16px]">No Results Found</h1>
            <p className="text-[#666] text-[15px] mb-[24px]">You haven't completed a game yet.</p>
            <button
              onClick={() => {
                window.location.hash = '#/';
                window.location.reload();
              }}
              className="bg-[#191919] text-white px-[24px] py-[12px] rounded-[50px] font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              Play Game
            </button>
          </div>
        </div>
      );
    }
  }

  // Always start a fresh game on page load — ignore any saved state.
  const savedGame = null;

  const [showIntro, setShowIntro] = useState(true);
  const [gamePhase, setGamePhase] = useState<GamePhase>("findingOdds");
  const [livesRemaining, setLivesRemaining] = useState(initialLives);

  // End-game screen state
  const [showEndGame, setShowEndGame] = useState(false);
  const [stage2Mistakes, setStage2Mistakes] = useState(savedGame?.stage2Mistakes || 0);

  // ─── Hint mode ───
  const prefersReducedMotion = useReducedMotion();
  const [hintMode, setHintMode] = useState(false);
  // Which hint bubble is open: 0–3 = rows, 4 = Relink tray, null = none.
  const [openHint, setOpenHint] = useState<number | null>(null);
  // Hints that have been opened at least once (icon stays lit; drives clean-solve).
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const cleanSolve = revealedHints.length === 0;
  const hintsUsed = revealedHints.length;

  const toggleHintMode = useCallback(() => {
    setHintMode((prev) => {
      if (prev) setOpenHint(null); // exiting closes any open bubble
      return !prev;
    });
  }, []);

  const toggleHint = useCallback((idx: number) => {
    setOpenHint((prev) => (prev === idx ? null : idx)); // one open at a time
    setRevealedHints((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
  }, []);

  // Safari theme-color: remove + recreate the meta tag to force Safari to re-read
  useEffect(() => {
    const color = showIntro
      ? "#9aa3ff"
      : showEndGame
        ? "#fcfcfc"
        : "#dde0ff";

    // Remove all existing theme-color meta tags
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());

    // Create a fresh one
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = color;
    document.head.appendChild(meta);
  }, [showIntro, showEndGame]);

  // Stage 1: any row guessable
  const [currentSelection, setCurrentSelection] = useState<{ word: string; groupIdx: number } | null>(null);
  const [solvedRows, setSolvedRows] = useState<number[]>(savedGame ? [0, 1, 2, 3] : []);
  const [wrongGuesses, setWrongGuesses] = useState<Record<number, string[]>>(savedGame?.wrongGuesses || {});
  const [stage1Mistakes, setStage1Mistakes] = useState(savedGame?.stage1Mistakes || 0);
  // Track guess history: true = correct, false = wrong, in order of guesses
  const [guessHistory, setGuessHistory] = useState<boolean[]>(savedGame?.guessHistory || []);
  // Detailed guess log for share text: each Phase 1 guess records group + outcome + prior wrongs
  const [guessLog, setGuessLog] = useState<{ groupIdx: number; wasCorrect: boolean; wrongCountBefore: number }[]>(savedGame?.guessLog || []);
  // Phase 2 attempt log: each entry = number of correctly positioned tiles in that attempt
  const [relinkAttempts, setRelinkAttempts] = useState<number[]>(savedGame?.relinkAttempts || []);
  const [wordOrders, setWordOrders] = useState<string[][]>(() => PUZZLE_GROUPS.map((g) => [...g.words]));
  const [rowShake, setRowShake] = useState<number | null>(null);
  const [mergingRow, setMergingRow] = useState<number | null>(null); // row currently doing merge animation

  // Unlock
  const [unlockPhase, setUnlockPhase] = useState<"locked" | "shaking" | "opening" | "unlocked">("locked");

  // Stage 2
  const [selectedRelinkWords, setSelectedRelinkWords] = useState<RelinkWord[]>([]);
  const [previousRelinkSubmissions, setPreviousRelinkSubmissions] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<"correct" | "failed" | null>(savedGame?.finalResult || null);
  const [lostDuringFinding, setLostDuringFinding] = useState(savedGame?.lostDuringFinding || false);
  const [stage2TotalLives, setStage2TotalLives] = useState(savedGame?.totalLives || initialLives);
  const [answerShake, setAnswerShake] = useState(false);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [recapPhase, setRecapPhase] = useState(0);
  const [rippleActive, setRippleActive] = useState(false);
  // Fail animation orchestrator state.
  //   0 = no fail in progress
  //   1 = 2s pause is over, unsolved rows are being revealed top→bottom
  //   2 = all rows revealed, relink tray is being unlocked
  //   3 = correct tiles are being placed into the answer area (one by one)
  //   4 = animation complete; finalResult is set and end-game screen is shown
  const [failPhase, setFailPhase] = useState(0);
  const [failRevealedRows, setFailRevealedRows] = useState<number[]>([]);

  // Refs let the fail orchestrator read the latest state without re-creating
  // the callback (and without having stale closure values inside setTimeouts).
  const solvedRowsRef = useRef<number[]>(solvedRows);
  const unlockPhaseRef = useRef(unlockPhase);
  useEffect(() => { solvedRowsRef.current = solvedRows; }, [solvedRows]);
  useEffect(() => { unlockPhaseRef.current = unlockPhase; }, [unlockPhase]);

  const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const oddTileRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // ─── Dynamic row height (min 64, max 80) ───
  const [rowHeight, setRowHeight] = useState(72);
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight;
      // Reserve space for: header(44) + tagline(32) + answer area(~105) + lives(36) + buttons(68) + padding(48)
      const reserved = 333;
      const gridGaps = 3 * 8; // 3 gaps of 8px between 4 rows
      const gridPadding = 24; // py-[12px] top + bottom
      const available = vh - reserved - gridGaps - gridPadding;
      const h = Math.floor(available / 4);
      setRowHeight(Math.max(64, Math.min(80, h)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // ─── Derived ───
  const isStage2 = gamePhase === "finalGuess" || gamePhase === "complete" || gamePhase === "gameOver";
  const isStage2Active = isStage2 && !finalResult;
  const isStage2Done = isStage2 && !!finalResult;

  const canSubmitStage1 = gamePhase === "findingOdds" && currentSelection !== null && rowShake === null && mergingRow === null;

  const isDuplicateRelink = (() => {
    if (selectedRelinkWords.length === 0) return false;
    const key = selectedRelinkWords.map((w) => `${w.groupIdx}:${w.word}`).join("|");
    return previousRelinkSubmissions.includes(key);
  })();

  const canSubmitRelink = gamePhase === "finalGuess" && selectedRelinkWords.length === RELINK_ANSWER.length && !finalResult && !isDuplicateRelink;
  const canClear = gamePhase === "findingOdds" ? currentSelection !== null : isStage2Active ? selectedRelinkWords.length > 0 : false;
  const canSubmit = gamePhase === "findingOdds" ? canSubmitStage1 : canSubmitRelink;

  // True from the moment a fail is triggered (gamePhase flips to "gameOver")
  // all the way through the reveal animation and into the end-game screen.
  // Used to freeze the layout so solved rows do not move during or after the
  // fail animation.
  const isFailFlow = gamePhase === "gameOver" || failPhase > 0 || finalResult === "failed";

  const layoutMode: "interactive" | "transitioning" | "guessing" | "recap" =
    isFailFlow ? (lostDuringFinding ? "interactive" : "guessing") :
    isStage2Done || recapPhase > 0 ? "recap" :
    isStage2Active ? "guessing" :
    gamePhase === "transitioning" ? "transitioning" : "interactive";

  const showTooltip = useCallback((msg: string, duration = 2000) => {
    if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    setTooltipMessage(msg);
    tooltipTimerRef.current = setTimeout(() => { setTooltipMessage(null); tooltipTimerRef.current = null; }, duration);
  }, []);

  useEffect(() => {
    if (layoutMode === "recap") {
      const timer = setTimeout(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, 200);
      return () => clearTimeout(timer);
    }
  }, [layoutMode]);

  // Save game state when it ends
  useEffect(() => {
    if (showEndGame && finalResult && !savedGame) {
      const gameState: SavedGameState = {
        guessHistory,
        stage1Mistakes,
        stage2Mistakes,
        totalLives: initialLives,
        livesRemaining,
        finalResult,
        wrongGuesses,
        lostDuringFinding,
        guessLog,
        relinkAttempts,
        cleanSolve,
        hintsUsed,
      };
      saveGame(gameState);
    }
  }, [showEndGame, finalResult, savedGame, guessHistory, stage1Mistakes, stage2Mistakes, stage2TotalLives, livesRemaining, wrongGuesses, lostDuringFinding, guessLog, relinkAttempts, cleanSolve, hintsUsed]);

  // ─── Transition to Stage 2 ───
  const transitionToStage2 = useCallback((newLives: number, totalLives: number) => {
    setGamePhase("transitioning");
    setCurrentSelection(null);
    setTimeout(() => setUnlockPhase("shaking"), 50);
    setTimeout(() => setUnlockPhase("opening"), 750);
    setTimeout(() => {
      setUnlockPhase("unlocked");
      setLivesRemaining(newLives);
      setStage2TotalLives(totalLives);
      // Start ripple animation before making Stage 2 interactive
      setRippleActive(true);
    }, 1250);
    // After ripple completes (~900ms for full diagonal cascade), make interactive
    setTimeout(() => {
      setRippleActive(false);
      setGamePhase("finalGuess");
    }, 2200);
  }, []);

  // ─── Fail Animation Orchestrator ───
  // Single source of truth for the "ran out of lives" reveal sequence.
  // Works from any point in the game (lost during Stage 1 with rows still
  // unsolved, or lost during Stage 2 with the tray already unlocked).
  const runFailAnimation = useCallback(() => {
    // Timing constants — tweak in one place.
    const INITIAL_PAUSE_MS = 2000;        // pause after the losing mistake
    const ROW_REVEAL_GAP_MS = 1500;       // gap between consecutive row reveals
    const POST_REVEAL_PAUSE_MS = 600;     // breath after the last row reveal
    const UNLOCK_SHAKE_MS = 700;          // lock shaking
    const UNLOCK_OPEN_MS = 500;           // lock opening / fading away
    const POST_UNLOCK_PAUSE_MS = 400;     // breath before placing tiles
    const TILE_PLACE_GAP_MS = 280;        // gap between tile placements
    const POST_PLACE_PAUSE_MS = 900;      // breath before showing end-game

    const unsolved = [0, 1, 2, 3].filter((i) => !solvedRowsRef.current.includes(i));
    const trayLocked = unlockPhaseRef.current !== "unlocked";

    let t = INITIAL_PAUSE_MS;

    // Phase 1 — reveal each unsolved row, top → bottom.
    setTimeout(() => {
      setFailPhase(1);
      unsolved.forEach((rowIdx, i) => {
        setTimeout(() => {
          setSolvedRows((prev) => (prev.includes(rowIdx) ? prev : [...prev, rowIdx]));
          setFailRevealedRows((prev) => (prev.includes(rowIdx) ? prev : [...prev, rowIdx]));
        }, i * ROW_REVEAL_GAP_MS);
      });
    }, t);
    t += unsolved.length * ROW_REVEAL_GAP_MS + POST_REVEAL_PAUSE_MS;

    // Phase 2 — unlock the relink tray (skipped if already unlocked).
    setTimeout(() => {
      setFailPhase(2);
      if (trayLocked) {
        setUnlockPhase("shaking");
        setTimeout(() => setUnlockPhase("opening"), UNLOCK_SHAKE_MS);
        setTimeout(() => setUnlockPhase("unlocked"), UNLOCK_SHAKE_MS + UNLOCK_OPEN_MS);
      }
    }, t);
    if (trayLocked) t += UNLOCK_SHAKE_MS + UNLOCK_OPEN_MS;
    t += POST_UNLOCK_PAUSE_MS;

    // Phase 3 — drop the correct tiles into the answer area, one at a time,
    // exactly as if the user tapped them.
    setTimeout(() => {
      setFailPhase(3);
      // Clear any leftover (likely wrong) tiles from a Stage 2 attempt right
      // before we start placing the correct ones.
      setSelectedRelinkWords([]);
      RELINK_ANSWER.forEach((word, i) => {
        const groupIdx = PUZZLE_GROUPS.findIndex((g) => g.words.includes(word));
        setTimeout(() => {
          setSelectedRelinkWords((prev) => [...prev, { word, groupIdx }]);
        }, i * TILE_PLACE_GAP_MS);
      });
    }, t);
    t += RELINK_ANSWER.length * TILE_PLACE_GAP_MS + POST_PLACE_PAUSE_MS;

    // Phase 4 — surface the end-game screen.
    setTimeout(() => {
      setFailPhase(4);
      setFinalResult("failed");
      setShowEndGame(true);
    }, t);
  }, []);

  // ─── Handle word tap (Stage 1) — any unsolved row ───
  const handleWordClick = useCallback(
    (groupIndex: number, word: string) => {
      if (gamePhase !== "findingOdds") return;
      if (solvedRows.includes(groupIndex)) return;
      if (rowShake !== null || mergingRow !== null) return;
      const wrongForRow = wrongGuesses[groupIndex] || [];
      if (wrongForRow.includes(word)) return;

      // Interacting with the board closes any open hint bubble.
      setOpenHint(null);
      setCurrentSelection((prev) => {
        if (prev && prev.word === word && prev.groupIdx === groupIndex) return null;
        return { word, groupIdx: groupIndex };
      });
    },
    [gamePhase, solvedRows, rowShake, mergingRow, wrongGuesses]
  );

  // ─── Handle submit (Stage 1) ───
  const handleSubmitStage1 = useCallback(() => {
    if (!canSubmitStage1 || currentSelection === null) return;

    const { word, groupIdx } = currentSelection;
    const group = PUZZLE_GROUPS[groupIdx];
    const isCorrect = word === group.oddWord;

    if (isCorrect) {
      // Correct! Start merge animation — add to solved after brief delay so layoutId animates
      setGuessHistory((prev) => [...prev, true]);
      const wrongCountBefore = (wrongGuesses[groupIdx] || []).length;
      setGuessLog((prev) => [...prev, { groupIdx, wasCorrect: true, wrongCountBefore }]);
      setMergingRow(groupIdx);

      setTimeout(() => {
        const newSolved = [...solvedRows, groupIdx];
        setSolvedRows(newSolved);
        setCurrentSelection(null);

        setTimeout(() => {
          setMergingRow(null);

          if (newSolved.length === PUZZLE_GROUPS.length) {
            transitionToStage2(livesRemaining, initialLives);
          }
        }, 300);
      }, 300);
    } else {
      // Wrong!
      setGuessHistory((prev) => [...prev, false]);
      const wrongCountBefore = (wrongGuesses[groupIdx] || []).length;
      setGuessLog((prev) => [...prev, { groupIdx, wasCorrect: false, wrongCountBefore }]);
      setRowShake(groupIdx);
      setStage1Mistakes((prev) => prev + 1);
      const newLives = livesRemaining - 1;
      setLivesRemaining(newLives);

      setWrongGuesses((prev) => ({
        ...prev,
        [groupIdx]: [...(prev[groupIdx] || []), word],
      }));

      setTimeout(() => {
        setRowShake(null);
        setCurrentSelection(null);

        if (newLives <= 0) {
          setLostDuringFinding(true);
          setGamePhase("gameOver");
          runFailAnimation();
        }
      }, 500);
    }
  }, [canSubmitStage1, currentSelection, solvedRows, livesRemaining, stage1Mistakes, showTooltip, transitionToStage2, runFailAnimation]);

  // ─── Handle relink word tap (Stage 2) ───
  const handleRelinkWordTap = useCallback(
    (word: string, groupIdx: number) => {
      if (finalResult) return;
      // Interacting with the board closes any open hint bubble.
      setOpenHint(null);
      setSelectedRelinkWords((prev) => {
        const existing = prev.findIndex((w) => w.word === word && w.groupIdx === groupIdx);
        if (existing >= 0) return prev.filter((_, i) => i !== existing);
        if (prev.length >= RELINK_ANSWER.length) return prev;
        return [...prev, { word, groupIdx }];
      });
    },
    [finalResult]
  );

  const handleSubmitRelink = useCallback(() => {
    if (!canSubmitRelink) return;
    const submissionKey = selectedRelinkWords.map((w) => `${w.groupIdx}:${w.word}`).join("|");
    if (previousRelinkSubmissions.includes(submissionKey)) { showTooltip("Already guessed this combo"); return; }
    setPreviousRelinkSubmissions((prev) => [...prev, submissionKey]);

    // Count how many tiles are in the correct position (check both canonical and reversed)
    const correctCountCanonical = selectedRelinkWords.reduce((acc, item, i) => acc + (item.word === RELINK_ANSWER[i] ? 1 : 0), 0);
    const correctCountReversed = selectedRelinkWords.reduce((acc, item, i) => acc + (item.word === RELINK_ANSWER[RELINK_ANSWER.length - 1 - i] ? 1 : 0), 0);
    const correctCount = Math.max(correctCountCanonical, correctCountReversed);

    if (checkRelinkAnswer(selectedRelinkWords)) {
      // Normalize to canonical order (NECK, TIE) if submitted in reverse
      const isReversed = selectedRelinkWords.every((item, i) => item.word === RELINK_ANSWER[RELINK_ANSWER.length - 1 - i]);
      if (isReversed) {
        const normalized = RELINK_ANSWER.map((word) => {
          const gIdx = PUZZLE_GROUPS.findIndex((g) => g.words.includes(word));
          return { word, groupIdx: gIdx };
        });
        setSelectedRelinkWords(normalized);
      }

      setRelinkAttempts((prev) => [...prev, correctCount]);
      setFinalResult("correct");
      setGamePhase("complete");
      // Celebration animation timeline:
      // Phase 1: imposter tiles snap together into a tight stack
      // Phase 2: tiles snap back out + two black halves slide in from top/bottom and meet
      // Phase 3: column solidified black, tiles faded, labels visible
      // Phase 4: answer bar appears
      setTimeout(() => setRecapPhase(1), 150);
      setTimeout(() => setRecapPhase(2), 500);
      setTimeout(() => setRecapPhase(3), 1100);
      setTimeout(() => setRecapPhase(4), 1600);
      setTimeout(() => {
        setShowEndGame(true);
      }, 4500);
    } else {
      setRelinkAttempts((prev) => [...prev, correctCount]);
      setAnswerShake(true);
      setStage2Mistakes((prev) => prev + 1);
      const newLives = livesRemaining - 1;
      setLivesRemaining(newLives);

      setTimeout(() => {
        setAnswerShake(false);

        // Check if out of lives
        if (newLives <= 0) {
          setGamePhase("gameOver");
          runFailAnimation();
        }
      }, 500);
    }
  }, [canSubmitRelink, selectedRelinkWords, previousRelinkSubmissions, showTooltip, livesRemaining, runFailAnimation]);

  const handleSubmit = useCallback(() => {
    if (gamePhase === "findingOdds") handleSubmitStage1();
    else if (gamePhase === "finalGuess") handleSubmitRelink();
  }, [gamePhase, handleSubmitStage1, handleSubmitRelink]);

  const handleClear = useCallback(() => {
    if (gamePhase === "findingOdds") setCurrentSelection(null);
    else if (isStage2Active) setSelectedRelinkWords([]);
  }, [gamePhase, isStage2Active]);

  const handleShuffle = useCallback(() => {
    if (gamePhase === "findingOdds") {
      // Shuffle all unsolved rows with guaranteed different order
      setWordOrders((prev) => {
        const next = prev.map((arr) => [...arr]);
        PUZZLE_GROUPS.forEach((_, idx) => {
          if (!solvedRows.includes(idx)) {
            next[idx] = guaranteedShuffle(next[idx]);
          }
        });
        return next;
      });
    } else if (isStage2Active) {
      setWordOrders((prev) => {
        const next = prev.map((arr) => [...arr]);
        PUZZLE_GROUPS.forEach((group, idx) => {
          const currentThree = next[idx].filter(w => group.correctThree.includes(w));
          const shuffledThree = guaranteedShuffle(currentThree);
          next[idx] = [...shuffledThree, group.oddWord];
        });
        return next;
      });
    }
  }, [gamePhase, solvedRows, isStage2Active]);

  // Drag reorder
  const handleDragStart = useCallback((idx: number) => setDragIdx(idx), []);
  const handleDragEnter = useCallback((idx: number) => {
    if (dragIdx === null || dragIdx === idx) return;
    setSelectedRelinkWords((prev) => { const a = [...prev]; const [r] = a.splice(dragIdx, 1); a.splice(idx, 0, r); return a; });
    setDragIdx(idx);
  }, [dragIdx]);
  const handleDragEnd = useCallback(() => setDragIdx(null), []);

  const isWordInAnswer = useCallback(
    (word: string, groupIdx: number) => selectedRelinkWords.some((w) => w.word === word && w.groupIdx === groupIdx),
    [selectedRelinkWords]
  );

  const taglineText = gamePhase === "findingOdds" || isStage2Done
    ? "Pick the impostor from each coloured row"
    : isStage2Active || gamePhase === "transitioning"
    ? "Select from the remaining tiles to build the relink"
    : "";

  // In hint mode the instruction line swaps its text in place (same element).
  const displayTagline = hintMode
    ? "Hint mode — tap a row's icon for its clue. Tap the lightbulb to exit."
    : taglineText;

  // Builds the hint overlay (frame + corner icon + bubble) for a given row.
  const HINT_ROW_NAMES = ["purple", "blue", "green", "orange"];
  const renderRowHint = (groupIdx: number, radius = 12) => {
    if (!hintMode) return null;
    // Once a row is answered (solved), its hint goes away.
    if (solvedRows.includes(groupIdx)) return null;
    const colors = GROUP_COLORS[groupIdx];
    return (
      <RowHintFrame
        frameColor={colors.selectedBg}
        iconColor={colors.selectedBg}
        bubbleBg={colors.bg}
        bubbleBorder={colors.selectedBg}
        bubbleText={colors.selectedShadow}
        ariaLabel={`Hint for the ${HINT_ROW_NAMES[groupIdx]} row`}
        clue={PUZZLE_GROUPS[groupIdx].clue}
        isOpen={openHint === groupIdx}
        isRevealed={revealedHints.includes(groupIdx)}
        onToggle={() => toggleHint(groupIdx)}
        direction={groupIdx === 3 ? "up" : "down"}
        reducedMotion={!!prefersReducedMotion}
        radius={radius}
      />
    );
  };

  // Builds the hint overlay for the Relink answer tray (brand-purple, opens up).
  const renderRelinkHint = () => {
    if (!hintMode) return null;
    return (
      <RowHintFrame
        frameColor={RELINK_HINT_COLORS.frame}
        iconColor={RELINK_HINT_COLORS.frame}
        bubbleBg={RELINK_HINT_COLORS.bubbleBg}
        bubbleBorder={RELINK_HINT_COLORS.bubbleBorder}
        bubbleText={RELINK_HINT_COLORS.bubbleText}
        ariaLabel="Hint for the relink"
        clue={RELINK_CLUE}
        isOpen={openHint === 4}
        isRevealed={revealedHints.includes(4)}
        onToggle={() => toggleHint(4)}
        direction="up"
        reducedMotion={!!prefersReducedMotion}
        radius={8}
      />
    );
  };

  const displayTotalLives = initialLives;

  return (
    <div className="w-full h-dvh bg-[#dde0ff] flex flex-col items-center font-sans">
      <PuzzleHeader hintMode={hintMode} onToggleHint={toggleHintMode} />

      <div ref={scrollRef} className="w-full flex-1 bg-[#fcfcfc] flex flex-col items-center overflow-auto">
        {/* Tooltip & Better Luck Pill */}
        <div className="h-0 relative w-full flex justify-center z-20">
          <div className="absolute top-[4px] z-10">
            <AnimatePresence>
              {tooltipMessage && <TooltipPopup message={tooltipMessage} />}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[500px] px-[16px] py-[12px] w-full">
          {displayTagline && !isFailFlow && (
            <div className="shrink-0 w-full">
              <div className="flex items-center justify-center px-[8px] w-full">
                <p className="font-normal leading-[20px] text-[#191919] text-[15px] text-center">{displayTagline}</p>
              </div>
            </div>
          )}

          {/* ─── GRID AREA ─── */}
          <LayoutGroup>
            {layoutMode !== "interactive" ? (
              /* ── All rows solved: native CSS grid with odd column as a real element ── */
              <div ref={gridContainerRef} className="relative w-full shrink-0">
              <div
                className="grid gap-x-[9px] gap-y-[8px] py-[12px] shrink-0 w-full"
                style={{
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gridTemplateRows: `repeat(4, ${rowHeight}px)`,
                }}
              >
                {/* 3-word containers — each spans columns 1–3 */}
                {PUZZLE_GROUPS.map((group, groupIdx) => {
                  const colors = GROUP_COLORS[groupIdx];
                  const words = wordOrders[groupIdx];
                  const isInGuessing = layoutMode === "guessing";
                  return (
                    <motion.div
                      key={group.groupName}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                      className="relative rounded-[16px]"
                      style={{
                        gridColumn: "1 / 4",
                        gridRow: groupIdx + 1,
                        backgroundColor: colors.containerBg,
                        zIndex: openHint === groupIdx ? 40 : undefined,
                      }}
                    >
                      {renderRowHint(groupIdx, 16)}
                      <div className="flex flex-row items-center size-full">
                        <div className="flex gap-[4px] items-end p-[8px] relative size-full overflow-visible">
                          {words.filter((w) => group.correctThree.includes(w)).map((word, colIdx) => {
                            const isInAns = isInGuessing && isWordInAnswer(word, groupIdx);
                            const tileBg = isInAns ? colors.selectedBg : isInGuessing ? colors.bg : colors.containerBg;
                            const rowDelay = (groupIdx * 3 + colIdx) * 0.065;
                            const isRippling = rippleActive && !isInGuessing;
                            // Raised = unselected during play, or ripple cascade (stays up)
                            const shouldBeRaised = isRippling || (isInGuessing && !isInAns);
                            return (
                              <div key={word} className="flex-[1_0_0] min-w-px h-full flex items-end">
                                <motion.div
                                  layoutId={`tile-${groupIdx}-${word}`}
                                  onClick={isInGuessing && handleRelinkWordTap ? () => handleRelinkWordTap(word, groupIdx) : undefined}
                                  className={cn("w-full relative rounded-[8px] select-none", isInGuessing && "cursor-pointer")}
                                  initial={false}
                                  animate={{
                                    height: shouldBeRaised ? "calc(100% + 4px)" : "100%",
                                    backgroundColor: isRippling ? colors.bg : tileBg,
                                  }}
                                  style={isRippling ? undefined : { backgroundColor: tileBg }}
                                  transition={{
                                    type: "spring", stiffness: 400, damping: 30,
                                    layout: { duration: 0.45, ease: "easeInOut" },
                                    height: isRippling
                                      ? { delay: rowDelay, duration: 0.25, ease: "easeOut" }
                                      : { duration: 0.15 },
                                    backgroundColor: isRippling
                                      ? { delay: rowDelay, duration: 0.25, ease: "easeOut" }
                                      : { duration: 0.15 },
                                  }}
                                >
                                  <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                    <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                      <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-center w-full" style={{ color: isInAns ? "white" : "#333" }}>
                                        {word}
                                      </FitText>
                                    </div>
                                  </div>
                                  {/* Raised shadow (unselected during play + ripple cascade) */}
                                  <motion.div
                                    aria-hidden="true"
                                    className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
                                    style={{ borderColor: colors.border, boxShadow: `0px 4px 0px 0px ${colors.border}` }}
                                    initial={false}
                                    animate={{ opacity: shouldBeRaised ? 1 : 0 }}
                                    transition={isRippling
                                      ? { delay: rowDelay, duration: 0.25, ease: "easeOut" }
                                      : { duration: 0.15 }
                                    }
                                  />
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
                            <FitText maxSize={13} minSize={8} className="font-bold leading-[normal] text-[#333] text-center whitespace-nowrap">
                              {group.correctGroupTitle.toUpperCase()}
                            </FitText>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Odd column — native grid element spanning all 4 rows */}
                <motion.div
                  className="rounded-[8px] flex flex-col px-[6px] relative overflow-hidden"
                  style={{ gridColumn: 4, gridRow: "1 / -1" }}
                  initial={false}
                  animate={{
                    backgroundColor: layoutMode === "recap" && finalResult !== "correct" && recapPhase >= 1 ? "#333" : "#ccc",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {PUZZLE_GROUPS.map((group, groupIdx) => {
                    const isCorrectRecap = layoutMode === "recap" && finalResult === "correct";
                    const isRecapMerged = layoutMode === "recap" && (isCorrectRecap ? recapPhase >= 3 : recapPhase >= 1);
                    // Stack: close the 12px gaps between tiles so they touch edge-to-edge
                    // Each gap is 12px; offsets center the stack: [+18, +6, -6, -18]
                    const stackOffsets = [18, 6, -6, -18];
                    const isConverging = isCorrectRecap && recapPhase >= 1 && recapPhase < 2;
                    const tileY = isConverging ? stackOffsets[groupIdx] : 0;
                    return (
                      <div
                        key={group.oddWord}
                        className="flex-1 flex flex-col items-center justify-center relative z-[1]"
                        style={{ padding: `${3}px 0` }}
                      >
                        <motion.div
                          ref={(el: HTMLDivElement | null) => { oddTileRefs.current[groupIdx] = el; }}
                          layoutId={`tile-${groupIdx}-${group.oddWord}`}
                          className="bg-[#333] relative rounded-[8px] w-full"
                          style={{ height: rowHeight - 6 }}
                          initial={false}
                          animate={{
                            opacity: isRecapMerged ? 0 : 1,
                            y: tileY,
                          }}
                          transition={{
                            opacity: { duration: 0.3 },
                            y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                            layout: { duration: 0.4, ease: "easeInOut" },
                          }}
                        >
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="flex flex-col items-center justify-center p-[4px] size-full">
                              <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                                {group.oddWord}
                              </FitText>
                            </div>
                          </div>
                        </motion.div>
                        {/* Recap text label (visible when tiles fade out) */}
                        {isRecapMerged && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute flex items-center justify-center px-[4px]"
                          >
                            <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-[#fcfcfc] text-center w-full">
                              {group.oddWord}
                            </FitText>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                  {/* Black scales out from center to fill column */}
                  {layoutMode === "recap" && finalResult === "correct" && recapPhase >= 2 && (
                    <motion.div
                      className="absolute bg-[#333] pointer-events-none z-[0] inset-0"
                      style={{ transformOrigin: '50% 50%' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </motion.div>
              </div>
              {/* Relink celebration animation */}
              {finalResult === "correct" && (
                <RelinkAnimation
                  phase={recapPhase}
                  tileRefs={oddTileRefs.current}
                  containerEl={gridContainerRef.current}
                />
              )}
              </div>
            ) : (
              /* ── Stage 1 interactive: flex layout with SolvedRow / unsolved rows ── */
              <div className="flex flex-col gap-[8px] items-start py-[12px] shrink-0 w-full">
                {PUZZLE_GROUPS.map((group, groupIdx) => {
                  const colors = GROUP_COLORS[groupIdx];
                  const words = wordOrders[groupIdx];
                  const isSolved = solvedRows.includes(groupIdx);
                  const wrongForRow = wrongGuesses[groupIdx] || [];
                  const isInFailAnimation = failPhase >= 1 && failPhase < 4;
                  const isRevealed = failRevealedRows.includes(groupIdx);

                  // Unsolved rows stay visible (in their 4-in-a-row state) right
                  // up until the moment they are revealed — no flicker.

                  if (isSolved) {
                    return (
                      <motion.div
                        key={group.groupName}
                        initial={isInFailAnimation && isRevealed ? { opacity: 0, y: 8 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="contents"
                      >
                        <SolvedRow
                          group={group}
                          groupIdx={groupIdx}
                          colors={colors}
                          wordOrders={words}
                          hideOddTile={false}
                          isGuessing={false}
                          isWordInAnswer={isWordInAnswer}
                          onRelinkTap={handleRelinkWordTap}
                          rowHeight={rowHeight}
                          hint={renderRowHint(groupIdx, 12)}
                          hintElevated={openHint === groupIdx}
                        />
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={group.groupName}
                      className="relative gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] w-full shrink-0"
                      style={{ zIndex: openHint === groupIdx ? 40 : undefined }}
                      animate={rowShake === groupIdx ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                      transition={rowShake === groupIdx ? { duration: 0.45, ease: "easeInOut" } : { duration: 0.1 }}
                    >
                      {renderRowHint(groupIdx, 10)}
                      {words.map((word) => {
                        const isSelected = currentSelection?.word === word && currentSelection?.groupIdx === groupIdx;
                        const isOddWord = word === group.oddWord;
                        const isWrong = wrongForRow.includes(word);

                        let bgColor = colors.bg;
                        let textColor = "#191919";
                        let borderColor = colors.border;

                        if (isSelected) {
                          bgColor = "#333";
                          textColor = "#fcfcfc";
                          borderColor = "#333";
                        }

                        const isClickable = !isWrong && rowShake === null && mergingRow === null;

                        return (
                          <motion.div
                            key={word}
                            layout
                            layoutId={`tile-${groupIdx}-${word}`}
                            onClick={isClickable ? () => handleWordClick(groupIdx, word) : undefined}
                            animate={{ scale: 1, opacity: isWrong ? 0.55 : 1 }}
                            transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                            className={cn(
                              "justify-self-stretch rounded-[8px] row-1 shrink-0 relative select-none",
                              isClickable ? "cursor-pointer" : "cursor-default"
                            )}
                            style={{ backgroundColor: bgColor, height: rowHeight }}
                          >
                            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-center w-full" style={{ color: textColor }}>
                                  {word}
                                </FitText>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor }} />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Recap answer bar */}
            <AnimatePresence>
              {(isStage2Done && (finalResult === "correct" || finalResult === "failed") && recapPhase >= 4) && (
                <motion.div key="recap-answer-bar" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut", scale: { type: "spring", stiffness: 300, damping: 15 } }} className="w-full max-w-[500px] pb-[12px]">
                  <div className="bg-[#333] h-[52px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="flex gap-[8px] items-center justify-center p-[8px]">
                        <div className="flex gap-[6px] items-center">
                          {RELINK_PREFIX && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }} className="font-bold leading-[normal] text-white text-[13px] text-center whitespace-nowrap uppercase">
                              {RELINK_PREFIX}
                            </motion.p>
                          )}
                          {RELINK_ANSWER.map((word, i) => {
                            const gIdx = PUZZLE_GROUPS.findIndex((g) => g.correctThree.includes(word));
                            const color = gIdx >= 0 ? GROUP_COLORS[gIdx].solved : "#ccc";
                            return (
                              <motion.div key={word} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }} className="px-[6px] py-[2px] rounded-[4px]" style={{ backgroundColor: color }}>
                                <p className="font-bold leading-[normal] text-[#333] text-[13px] text-center whitespace-nowrap">{word}</p>
                              </motion.div>
                            );
                          })}
                          {RELINK_SUFFIX && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 + RELINK_ANSWER.length * 0.1 }} className="font-bold leading-[normal] text-white text-[13px] text-center whitespace-nowrap uppercase">
                              {RELINK_SUFFIX}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>

          {/* ─── STAGE 2 ANSWER AREA (always visible until recap) ─── */}
          {(!isStage2Done || isFailFlow) && (
            <div className="relative w-full py-[8px]">
              <motion.div
                className="w-full"
                animate={{
                  opacity: layoutMode === "guessing" || failPhase >= 2 || unlockPhase === "unlocked"
                    ? 1
                    : 0.3
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="bg-[#ccc] relative rounded-[8px]"
                  style={{ zIndex: openHint === 4 ? 40 : undefined }}
                  animate={answerShake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                  transition={answerShake ? { duration: 0.45, ease: "easeInOut" } : { duration: 0.1 }}
                >
                  {unlockPhase === "unlocked" && renderRelinkHint()}
                  <div className="gap-x-[6px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] p-[8px] relative w-full">
                    {Array.from({ length: RELINK_ANSWER.length }).map((_, slotIdx) => {
                      const item = selectedRelinkWords[slotIdx];
                      const itemColors = item ? GROUP_COLORS[item.groupIdx] : null;
                      return (
                        <div
                          key={slotIdx}
                          className="relative rounded-[8px]"
                          style={{ height: rowHeight - 16 }}
                          onDragOver={(e: React.DragEvent) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; }}
                          onDragEnter={() => handleDragEnter(slotIdx)}
                          onDrop={(e: React.DragEvent) => { e.preventDefault(); handleDragEnd(); }}
                        >
                          <div className="bg-[#fcfcfc] absolute inset-0 rounded-[8px]" />
                          <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
                          {item && itemColors && (
                            <div className="flex flex-col justify-end overflow-visible pt-[4px] px-[4px] pb-[6px] rounded-[inherit] size-full relative z-10">
                              <motion.div
                                initial={{ opacity: 0, height: "100%" }}
                                animate={{
                                  opacity: 1,
                                  height: dragIdx === slotIdx ? "calc(100% + 6px)" : "calc(100% + 4px)",
                                  scale: dragIdx === slotIdx ? 1.02 : 1,
                                }}
                                transition={{
                                  opacity: { duration: 0.1 },
                                  height: { type: "spring", stiffness: 600, damping: 22, mass: 0.6, delay: 0.06 },
                                  scale: { type: "spring", stiffness: 400, damping: 25 },
                                }}
                                draggable
                                onDragStart={() => handleDragStart(slotIdx)}
                                onDragEnd={handleDragEnd}
                                onClick={() => handleRelinkWordTap(item.word, item.groupIdx)}
                                className="relative rounded-[8px] shrink-0 w-full select-none cursor-grab active:cursor-grabbing"
                                style={{ backgroundColor: itemColors.selectedBg, touchAction: "none" }}
                              >
                                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="flex flex-col items-center justify-center p-[4px] size-full">
                                    <FitText maxSize={13} minSize={8} allowWrap className="font-bold leading-[16px] text-white text-center w-full">{item.word}</FitText>
                                  </div>
                                </div>
                                <motion.div
                                  aria-hidden="true"
                                  className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
                                  style={{ borderColor: itemColors.selectedShadow, boxShadow: `0px 4px 0px 0px ${itemColors.selectedShadow}` }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.08, duration: 0.15 }}
                                />
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
                      <LockIcon size={24} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <motion.div
            initial={false}
            animate={{ opacity: isStage2Done || isFailFlow ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <LivesDots remaining={livesRemaining} total={displayTotalLives} />
          </motion.div>

          <motion.div
            className="max-w-[500px] w-full"
            initial={false}
            animate={{ opacity: isStage2Done || isFailFlow ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-[8px] items-center pt-[8px] px-[4px] pb-[24px] w-full">
              <GameButton onClick={handleShuffle} disabled={gamePhase === "transitioning" || isStage2Done || isFailFlow} label="Shuffle" active />
              <GameButton onClick={handleClear} disabled={!canClear || isFailFlow} label="Clear" />
              <GameButton onClick={handleSubmit} disabled={!canSubmit || isFailFlow} label="Submit" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlay screens */}
      <AnimatePresence>
        {showIntro && (
          <IntroScreen
            onStart={() => {
              setShowIntro(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* End-game screen */}
      <AnimatePresence>
        {showEndGame && finalResult && (
          <EndGameScreen
            key="end-game"
            guessHistory={guessHistory}
            stage1Mistakes={stage1Mistakes}
            stage2Mistakes={stage2Mistakes}
            totalLives={initialLives}
            livesRemaining={livesRemaining}
            finalResult={finalResult}
            relinkAnswer={RELINK_ANSWER}
            relinkPrefix={RELINK_PREFIX}
            groupColors={GROUP_COLORS}
            groupNames={PUZZLE_GROUPS.map((g) => g.correctGroupTitle)}
            oddWords={PUZZLE_GROUPS.map((g) => g.oddWord)}
            wrongGuesses={wrongGuesses}
            lostDuringFinding={lostDuringFinding}
            guessLog={guessLog}
            relinkAttempts={relinkAttempts}
            relinkAnswerLength={RELINK_ANSWER.length}
            cleanSolve={cleanSolve}
            hintsUsed={hintsUsed}
            onClose={() => setShowEndGame(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}