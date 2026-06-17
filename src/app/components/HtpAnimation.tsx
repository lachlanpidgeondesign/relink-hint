import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

// ─── Data (matches tutorial-game.tsx exactly) ───

interface GroupData {
  words: string[];
  correctThree: string[];
  oddWord: string;
  groupTitle: string;
}

const GROUPS: GroupData[] = [
  { words: ["FOOD", "MOOD", "RUDE", "PIZZA"], correctThree: ["FOOD", "MOOD", "RUDE"], oddWord: "PIZZA", groupTitle: "Rhyme Time" },
  { words: ["GRASS", "BURGER", "EMERALD", "LIME"], correctThree: ["GRASS", "EMERALD", "LIME"], oddWord: "BURGER", groupTitle: "Green Things" },
  { words: ["CHICKEN", "RABBIT", "DOG", "CAT"], correctThree: ["RABBIT", "DOG", "CAT"], oddWord: "CHICKEN", groupTitle: "Mammals" },
  { words: ["FAST", "QUICK", "FRIES", "ZOOM"], correctThree: ["FAST", "QUICK", "ZOOM"], oddWord: "FRIES", groupTitle: "Speedy" },
];

const RELINK_ANSWER: { word: string; groupIdx: number }[] = [
  { word: "FAST", groupIdx: 3 },
  { word: "FOOD", groupIdx: 0 },
];

interface GroupColors {
  bg: string;
  border: string;
  containerBg: string;
  solved: string;
  selectedBg: string;
  selectedShadow: string;
}

const COLORS: GroupColors[] = [
  { bg: "#dedcfa", border: "#9b95f0", containerBg: "#bdb9f5", solved: "#9b95f0", selectedBg: "#7a72eb", selectedShadow: "#352f8a" },
  { bg: "#dbedff", border: "#94caff", containerBg: "#b8dbff", solved: "#94caff", selectedBg: "#71b8ff", selectedShadow: "#2e6499" },
  { bg: "#ccf5eb", border: "#66e0c4", containerBg: "#99ebd8", solved: "#66e0c4", selectedBg: "#00cc9d", selectedShadow: "#007a5e" },
  { bg: "#fdeed8", border: "#f8cd8b", containerBg: "#fadeb1", solved: "#f8cd8b", selectedBg: "#f3ac3d", selectedShadow: "#926725" },
];

const LOCK_PATH = "M19.725 10.5H17.9475V7.4475C17.9475 3.3375 14.6025 0 10.5 0C6.3975 0 3.0525 3.3375 3.0525 7.4475V10.5H1.275C0.57 10.5 0 11.07 0 11.775V22.725C0 23.43 0.57 24 1.275 24H19.725C20.43 24 21 23.43 21 22.725V11.775C21 11.07 20.43 10.5 19.725 10.5ZM5.3025 7.4475C5.3025 4.5825 7.635 2.25 10.5 2.25C13.365 2.25 15.6975 4.5825 15.6975 7.4475V10.5H5.3025V7.4475Z";

// ─── Sizing (scaled to fit 250×230 container) ───

const S = 0.55; // overall scale factor
const ROW_H = Math.round(60 * S); // ~33
const ODD_TILE_H = ROW_H - Math.round(6 * S);
const GAP_X = Math.round(9 * S);
const GAP_Y = Math.round(8 * S);
const TILE_GAP = Math.round(4 * S);
const FONT = Math.round(13 * S);
const FONT_MIN = Math.round(8 * S);
const LABEL_FONT = Math.round(11 * S);
const PILL_PX = Math.round(6 * S);
const PILL_PY = Math.round(2 * S);
const TILE_PAD = Math.round(4 * S);
const TILE_R = Math.round(8 * S);
const CONTAINER_R = Math.round(16 * S);
const ANSWER_H = ROW_H - Math.round(16 * S);
const ANSWER_PAD = Math.round(8 * S);
const ANSWER_SLOT_GAP = Math.round(6 * S);
const CONNECTION_H = Math.round(36 * S);
const PX = Math.round(4 * S);

// ─── Timing ───

const T = {
  INITIAL: 600,
  BEFORE_SELECT: 500,
  SELECT_HOLD: 400,
  SOLVE_ANIM: 500,
  BETWEEN_ROWS: 500,
  LOCK_PAUSE: 200,
  LOCK_SHAKE: 700,
  LOCK_OPEN: 500,
  STAGE2_PAUSE: 600,
  RELINK_SELECT: 500,
  RELINK_BETWEEN: 400,
  SUBMIT_PAUSE: 400,
  CONNECTION_SHOW: 600,
  END_HOLD: 2500,
};

// ─── Phase types ───

type Phase =
  | "idle"
  | "selecting"   // stage 1: imposter highlighted
  | "solving"     // stage 1: row merging
  | "lockShaking" // transition lock
  | "lockOpening"
  | "stage2"      // stage 2: tiles being picked
  | "stage2selecting" // stage 2: a tile is highlighted
  | "complete"    // connection bar shown
  | "resetting";

interface AnimState {
  phase: Phase;
  solvedRows: Set<number>;
  selectedTile: { word: string; groupIdx: number } | null;
  relinkSlots: { word: string; groupIdx: number }[];
  showConnection: boolean;
  currentRow: number;
}

const INIT_STATE: AnimState = {
  phase: "idle",
  solvedRows: new Set(),
  selectedTile: null,
  relinkSlots: [],
  showConnection: false,
  currentRow: 0,
};

// ─── Component ───

export function HtpAnimation() {
  const [state, setState] = useState<AnimState>({ ...INIT_STATE });
  const [cycle, setCycle] = useState(0);

  const reset = useCallback(() => {
    setState({ ...INIT_STATE, solvedRows: new Set() });
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((resolve) => {
      const t = setTimeout(resolve, ms);
      if (cancelled) clearTimeout(t);
    });
    const set = (patch: Partial<AnimState>) => {
      if (!cancelled) setState((s) => ({ ...s, ...patch }));
    };

    (async () => {
      await wait(T.INITIAL);

      // ─── Stage 1: Find imposters ───
      for (let i = 0; i < 4; i++) {
        if (cancelled) return;

        // Select the odd word
        set({ phase: "selecting", selectedTile: { word: GROUPS[i].oddWord, groupIdx: i }, currentRow: i });
        await wait(T.BEFORE_SELECT + T.SELECT_HOLD);
        if (cancelled) return;

        // Solve the row
        set({ phase: "solving", selectedTile: null });
        await wait(T.SOLVE_ANIM);
        if (cancelled) return;

        setState((s) => ({
          ...s,
          solvedRows: new Set(s.solvedRows).add(i),
          phase: "idle",
        }));
        await wait(T.BETWEEN_ROWS);
        if (cancelled) return;
      }

      // ─── Lock transition ───
      await wait(T.LOCK_PAUSE);
      if (cancelled) return;
      set({ phase: "lockShaking" });
      await wait(T.LOCK_SHAKE);
      if (cancelled) return;
      set({ phase: "lockOpening" });
      await wait(T.LOCK_OPEN);
      if (cancelled) return;

      // ─── Stage 2: Pick relink tiles ───
      set({ phase: "stage2", relinkSlots: [] });
      await wait(T.STAGE2_PAUSE);
      if (cancelled) return;

      for (let i = 0; i < RELINK_ANSWER.length; i++) {
        if (cancelled) return;
        const target = RELINK_ANSWER[i];

        // Highlight the tile
        set({ phase: "stage2selecting", selectedTile: target });
        await wait(T.RELINK_SELECT);
        if (cancelled) return;

        // Move to answer slot
        setState((s) => ({
          ...s,
          selectedTile: null,
          relinkSlots: [...s.relinkSlots, target],
        }));
        await wait(T.RELINK_BETWEEN);
        if (cancelled) return;
      }

      // Submit
      await wait(T.SUBMIT_PAUSE);
      if (cancelled) return;

      // Show connection
      set({ phase: "complete", showConnection: true });
      await wait(T.END_HOLD);
      if (cancelled) return;

      // Reset
      set({ phase: "resetting" });
      await wait(400);
      if (cancelled) return;
      reset();
    })();

    return () => { cancelled = true; };
  }, [cycle, reset]);

  const { phase, solvedRows, selectedTile, relinkSlots, showConnection } = state;
  const allSolved = solvedRows.size === 4;
  const isStage2 = phase === "stage2" || phase === "stage2selecting" || phase === "complete";
  const showLock = phase === "lockShaking" || phase === "lockOpening";
  const showAnswerArea = allSolved && !showConnection;

  return (
    <div className="relative overflow-hidden select-none bg-[#fcfcfc]" style={{ width: 250, height: 230 }}>
      <LayoutGroup id="htp-anim">
        <div style={{ padding: `${PX}px ${PX}px 0` }}>
          {allSolved ? (
            // ─── Stage 2 layout: 3-col containers + odd column ───
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gridTemplateRows: `repeat(4, ${ROW_H}px)`,
                gap: `${GAP_Y}px ${GAP_X}px`,
                padding: `${GAP_Y}px 0`,
              }}
            >
              {GROUPS.map((group, gIdx) => {
                const c = COLORS[gIdx];
                return (
                  <motion.div
                    key={`container-${gIdx}`}
                    className="relative overflow-visible"
                    style={{
                      gridColumn: "1 / 4",
                      gridRow: gIdx + 1,
                      backgroundColor: c.containerBg,
                      borderRadius: CONTAINER_R,
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: gIdx * 0.05 }}
                  >
                    <div className="flex items-end size-full overflow-visible" style={{ padding: TILE_PAD, gap: TILE_GAP }}>
                      {group.correctThree.map((word) => {
                        const isInAnswer = relinkSlots.some((s) => s.word === word && s.groupIdx === gIdx);
                        const isHighlighted = selectedTile?.word === word && selectedTile?.groupIdx === gIdx;
                        const tileBg = isInAnswer ? c.selectedBg : isHighlighted ? c.selectedBg : isStage2 ? c.bg : c.containerBg;

                        return (
                          <div key={word} className="flex-1 min-w-0 h-full flex items-end">
                            <motion.div
                              layoutId={`htile-${gIdx}-${word}`}
                              className="w-full relative"
                              style={{
                                backgroundColor: tileBg,
                                borderRadius: TILE_R,
                              }}
                              initial={false}
                              animate={{
                                height: isInAnswer || isHighlighted ? "calc(100% + 2px)" : "100%",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 30, layout: { duration: 0.45, ease: "easeInOut" } }}
                            >
                              <div className="flex items-center justify-center size-full" style={{ padding: TILE_PAD }}>
                                <span
                                  className="font-bold text-center leading-none"
                                  style={{
                                    fontSize: FONT_MIN,
                                    fontFamily: "'Inter', sans-serif",
                                    color: isInAnswer || isHighlighted ? "#fff" : "#333",
                                  }}
                                >
                                  {word}
                                </span>
                              </div>
                              {(isInAnswer || isHighlighted) && (
                                <div
                                  className="absolute inset-0 pointer-events-none"
                                  style={{
                                    borderRadius: TILE_R,
                                    border: `1px solid ${c.selectedShadow}`,
                                    boxShadow: `0px 2px 0px 0px ${c.selectedShadow}`,
                                  }}
                                />
                              )}
                            </motion.div>
                          </div>
                        );
                      })}

                      {/* Group label pill */}
                      <motion.div
                        className="absolute flex items-center justify-center"
                        style={{
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: c.solved,
                          borderRadius: Math.round(4 * S),
                          padding: `${PILL_PY}px ${PILL_PX}px`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.2 }}
                      >
                        <span
                          className="font-bold uppercase text-center whitespace-nowrap leading-none"
                          style={{ fontSize: LABEL_FONT, fontFamily: "'Inter', sans-serif", color: "#333" }}
                        >
                          {group.groupTitle}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Odd column */}
              <motion.div
                className="flex flex-col"
                style={{
                  gridColumn: 4,
                  gridRow: "1 / -1",
                  borderRadius: TILE_R,
                  padding: `0 ${Math.round(3 * S)}px`,
                }}
                initial={false}
                animate={{ backgroundColor: showConnection ? "#333" : "#ccc" }}
                transition={{ duration: 0.5 }}
              >
                {GROUPS.map((group, gIdx) => (
                  <div key={gIdx} className="flex-1 flex items-center justify-center relative" style={{ padding: `${Math.round(3 * S)}px 0` }}>
                    <motion.div
                      layoutId={`htile-${gIdx}-${group.oddWord}`}
                      className="w-full relative"
                      style={{
                        backgroundColor: "#333",
                        borderRadius: TILE_R,
                        height: ODD_TILE_H,
                      }}
                      initial={false}
                      animate={{ opacity: showConnection ? 0 : 1 }}
                      transition={{ duration: 0.4, layout: { duration: 0.45, ease: "easeInOut" } }}
                    >
                      <div className="flex items-center justify-center size-full" style={{ padding: TILE_PAD }}>
                        <span
                          className="font-bold text-center leading-none"
                          style={{ fontSize: FONT_MIN, fontFamily: "'Inter', sans-serif", color: "#fcfcfc" }}
                        >
                          {group.oddWord}
                        </span>
                      </div>
                    </motion.div>
                    {showConnection && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute flex items-center justify-center"
                        style={{ padding: `0 ${TILE_PAD}px` }}
                      >
                        <span
                          className="font-bold text-center leading-none"
                          style={{ fontSize: FONT_MIN, fontFamily: "'Inter', sans-serif", color: "#fcfcfc" }}
                        >
                          {group.oddWord}
                        </span>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            // ─── Stage 1 layout: 4 unsolved/solved rows ───
            <div className="flex flex-col" style={{ gap: GAP_Y, padding: `${GAP_Y}px 0` }}>
              {GROUPS.map((group, gIdx) => {
                const c = COLORS[gIdx];
                const isSolved = solvedRows.has(gIdx);

                if (isSolved) {
                  return (
                    <div
                      key={`solved-${gIdx}`}
                      className="grid"
                      style={{
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gap: `0 ${GAP_X}px`,
                        height: ROW_H,
                      }}
                    >
                      {/* Link container (cols 1-3) */}
                      <motion.div
                        className="relative overflow-visible"
                        style={{
                          gridColumn: "1 / span 3",
                          backgroundColor: c.containerBg,
                          borderRadius: CONTAINER_R,
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex items-end size-full overflow-visible" style={{ padding: TILE_PAD, gap: TILE_GAP }}>
                          {group.correctThree.map((word) => (
                            <div key={word} className="flex-1 min-w-0 h-full flex items-end">
                              <motion.div
                                layoutId={`htile-${gIdx}-${word}`}
                                className="w-full h-full relative"
                                style={{ backgroundColor: c.containerBg, borderRadius: TILE_R }}
                                transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                              >
                                <div className="flex items-center justify-center size-full" style={{ padding: TILE_PAD }}>
                                  <span
                                    className="font-bold text-center leading-none"
                                    style={{ fontSize: FONT_MIN, fontFamily: "'Inter', sans-serif", color: "#333" }}
                                  >
                                    {word}
                                  </span>
                                </div>
                              </motion.div>
                            </div>
                          ))}
                          {/* Group label */}
                          <motion.div
                            className="absolute flex items-center justify-center"
                            style={{
                              top: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: c.solved,
                              borderRadius: Math.round(4 * S),
                              padding: `${PILL_PY}px ${PILL_PX}px`,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35, delay: 0.2 }}
                          >
                            <span
                              className="font-bold uppercase text-center whitespace-nowrap leading-none"
                              style={{ fontSize: LABEL_FONT, fontFamily: "'Inter', sans-serif", color: "#333" }}
                            >
                              {group.groupTitle}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Odd tile (col 4) */}
                      <div className="flex items-center justify-center" style={{ gridColumn: 4, padding: `${Math.round(3 * S)}px 0` }}>
                        <motion.div
                          layoutId={`htile-${gIdx}-${group.oddWord}`}
                          className="w-full relative"
                          style={{ backgroundColor: "#333", borderRadius: TILE_R, height: ODD_TILE_H }}
                          transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                        >
                          <div className="flex items-center justify-center size-full" style={{ padding: TILE_PAD }}>
                            <span
                              className="font-bold text-center leading-none"
                              style={{ fontSize: FONT_MIN, fontFamily: "'Inter', sans-serif", color: "#fcfcfc" }}
                            >
                              {group.oddWord}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                }

                // Unsolved row
                return (
                  <div
                    key={`unsolved-${gIdx}`}
                    className="grid"
                    style={{
                      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                      gap: `0 ${Math.round(12 * S)}px`,
                      height: ROW_H,
                    }}
                  >
                    {group.words.map((word) => {
                      const isOdd = word === group.oddWord;
                      const isSelected = selectedTile?.word === word && selectedTile?.groupIdx === gIdx;
                      const bgColor = isSelected ? "#333" : c.bg;
                      const textColor = isSelected ? "#fcfcfc" : "#191919";
                      const borderColor = isSelected ? "#333" : c.border;

                      return (
                        <motion.div
                          key={word}
                          layout
                          layoutId={`htile-${gIdx}-${word}`}
                          className="relative"
                          style={{ backgroundColor: bgColor, borderRadius: TILE_R, height: ROW_H }}
                          animate={{ scale: 1 }}
                          transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                        >
                          <div className="flex items-center justify-center size-full overflow-hidden" style={{ borderRadius: TILE_R, padding: TILE_PAD }}>
                            <span
                              className="font-bold text-center leading-none"
                              style={{ fontSize: FONT, fontFamily: "'Inter', sans-serif", color: textColor }}
                            >
                              {word}
                            </span>
                          </div>
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ border: `1px solid ${borderColor}`, borderRadius: TILE_R }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── Connection bar ─── */}
          <AnimatePresence>
            {showConnection && (
              <motion.div
                key="conn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ paddingBottom: GAP_Y }}
              >
                <div
                  className="bg-[#333] w-full flex items-center justify-center"
                  style={{ height: CONNECTION_H, borderRadius: TILE_R }}
                >
                  <div className="flex items-center" style={{ gap: Math.round(4 * S) }}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="font-bold uppercase text-center whitespace-nowrap"
                      style={{ fontSize: FONT_MIN, color: "#fcfcfc", fontFamily: "'Inter', sans-serif" }}
                    >
                      Kinds of
                    </motion.span>
                    {RELINK_ANSWER.map((item, i) => {
                      const c = COLORS[item.groupIdx];
                      return (
                        <motion.div
                          key={item.word}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          style={{
                            backgroundColor: c.solved,
                            borderRadius: Math.round(4 * S),
                            padding: `${PILL_PY}px ${PILL_PX}px`,
                          }}
                        >
                          <span
                            className="font-bold text-center whitespace-nowrap leading-none"
                            style={{ fontSize: FONT_MIN, color: "#333", fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.word}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Answer area ─── */}
          {showAnswerArea && (
            <div className="relative" style={{ padding: `0 0 ${GAP_Y}px` }}>
              <motion.div
                initial={false}
                animate={{ opacity: isStage2 ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="bg-[#ccc] w-full"
                  style={{ borderRadius: TILE_R, padding: ANSWER_PAD }}
                >
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: `repeat(${RELINK_ANSWER.length}, minmax(0, 1fr))`,
                      gap: ANSWER_SLOT_GAP,
                    }}
                  >
                    {RELINK_ANSWER.map((_, slotIdx) => {
                      const item = relinkSlots[slotIdx];
                      const itemColors = item ? COLORS[item.groupIdx] : null;
                      return (
                        <div
                          key={slotIdx}
                          className="relative"
                          style={{ height: ANSWER_H, borderRadius: TILE_R }}
                        >
                          <div className="bg-[#fcfcfc] absolute inset-0" style={{ borderRadius: TILE_R }} />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              border: "1px dashed #666",
                              borderRadius: TILE_R,
                            }}
                          />
                          <AnimatePresence>
                            {item && itemColors && (
                              <motion.div
                                key={`slot-${item.word}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ borderRadius: TILE_R, padding: 2 }}
                              >
                                <div
                                  className="w-full h-full relative flex items-center justify-center"
                                  style={{
                                    backgroundColor: itemColors.selectedBg,
                                    borderRadius: TILE_R,
                                  }}
                                >
                                  <span
                                    className="font-bold text-center leading-none"
                                    style={{ fontSize: FONT_MIN, fontFamily: "'Inter', sans-serif", color: "#fff" }}
                                  >
                                    {item.word}
                                  </span>
                                  <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                      borderRadius: TILE_R,
                                      border: `1px solid ${itemColors.selectedShadow}`,
                                      boxShadow: `0px 2px 0px 0px ${itemColors.selectedShadow}`,
                                    }}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Lock overlay */}
              <AnimatePresence>
                {(showLock || (!isStage2 && phase !== "complete")) && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={
                        phase === "lockShaking"
                          ? { rotate: [0, -12, 12, -10, 10, -6, 6, -3, 3, 0], scale: [1, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.02, 1.02, 1] }
                          : phase === "lockOpening"
                          ? { scale: [1, 1.4, 0], opacity: [1, 1, 0], rotate: [0, 0, 15], y: [0, -5, -15] }
                          : { scale: 1, rotate: 0, opacity: 1 }
                      }
                      transition={
                        phase === "lockShaking"
                          ? { duration: 0.7, ease: "easeInOut" }
                          : phase === "lockOpening"
                          ? { duration: 0.5, ease: "easeOut" }
                          : { duration: 0.1 }
                      }
                    >
                      <svg width={Math.round(16 * S)} height={Math.round(16 * S)} viewBox="0 0 21 24" fill="none">
                        <path d={LOCK_PATH} fill="#333333" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </LayoutGroup>
    </div>
  );
}
