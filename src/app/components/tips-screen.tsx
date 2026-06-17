import React from "react";
import { motion } from "motion/react";
import arrowSvg from "../../imports/svg-xid8zjn3g8";

// SVG paths for tick and cross circles
const TICK_PATH = "M17.0706 2.92941C15.1941 1.05294 12.6529 0 10 0C4.47647 0 0 4.47647 0 10C0 15.5235 4.47647 20 10 20C15.5235 20 20 15.5235 20 10C20 7.34706 18.9471 4.80588 17.0706 2.92941ZM15.6882 7.22941L8.67059 14.1765C8.62353 14.2235 8.56471 14.2471 8.5 14.2471C8.43529 14.2471 8.37059 14.2235 8.32941 14.1765L4.61765 10.5C4.57647 10.4529 4.55294 10.3941 4.55294 10.3294C4.55294 10.2647 4.58235 10.2059 4.62353 10.1588L6 8.8C6.04706 8.75294 6.10588 8.72941 6.17059 8.72941C6.23529 8.72941 6.3 8.75294 6.34118 8.8L8.50588 10.9412L13.9647 5.53529C14.0118 5.48824 14.0706 5.46471 14.1353 5.46471C14.2 5.46471 14.2647 5.48824 14.3059 5.53529L15.6824 6.89412C15.7765 6.98824 15.7765 7.14118 15.6824 7.23529L15.6882 7.22941Z";
const CROSS_PATH = "M10 0C4.47647 0 0 4.47647 0 10C0 15.5235 4.47647 20 10 20C15.5235 20 20 15.5235 20 10C20 4.47647 15.5235 0 10 0ZM14.1235 12.5059C14.5706 12.9529 14.5706 13.6824 14.1235 14.1294C13.6765 14.5765 12.9471 14.5765 12.5 14.1294L9.99412 11.6235L7.48824 14.1294C7.04118 14.5765 6.31177 14.5765 5.86471 14.1294C5.41765 13.6824 5.41765 12.9529 5.86471 12.5059L8.37059 10L5.86471 7.49412C5.41765 7.04706 5.41765 6.31765 5.86471 5.87059C6.31177 5.42353 7.04118 5.42353 7.48824 5.87059L9.99412 8.37647L12.5 5.87059C12.9471 5.42353 13.6765 5.42353 14.1235 5.87059C14.5706 6.31765 14.5706 7.04706 14.1235 7.49412L11.6176 10L14.1235 12.5059Z";

interface TipRowProps {
  type: "bad" | "good";
  children: React.ReactNode;
  delay: number;
}

function TipRow({ type, children, delay }: TipRowProps) {
  const bgColor = type === "bad" ? "#666" : "#333";
  const opacity = type === "bad" ? 0.5 : 1;
  const iconPath = type === "bad" ? CROSS_PATH : TICK_PATH;
  const iconBg = type === "bad" ? "#191919" : "black";

  return (
    <motion.div
      className="flex flex-col items-start relative rounded-[16px] shrink-0 w-full"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity, x: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundColor: bgColor }}>
        <div className="flex flex-row items-center justify-center size-full">
          <div className="flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
            <div className="overflow-clip relative rounded-[99px] shrink-0 size-[20px]" style={{ backgroundColor: iconBg }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={iconPath} fill="white" />
              </svg>
            </div>
            <div className="flex gap-[4px] items-center shrink-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Label({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: color }}>
      <p className="font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#333] text-[clamp(11px,3vw,13px)] text-center text-ellipsis whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

function WhiteText({ text }: { text: string }) {
  return (
    <p className="font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#fcfcfc] text-[clamp(11px,3vw,13px)] text-center text-ellipsis whitespace-nowrap">
      {text}
    </p>
  );
}

export function TipsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center justify-start z-50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-[clamp(12px,2vh,16px)] items-center px-[16px] pt-[clamp(16px,3vh,24px)] pb-[24px] w-full max-w-[420px]">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-['Literata',serif] font-bold text-[#191919] text-[24px] leading-[34px] text-center"
        >
          Tips
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#191919] text-[15px] leading-[20px] font-normal text-center max-w-[358px]"
        >
          <p>A category will never be generic and have a level of specificity:</p>
          <p className="h-[0.8em]" />
          <p>Sometimes you may need to create a phrase or part of a phrase.</p>
        </motion.div>

        {/* Examples */}
        <div className="max-w-[358px] w-full">
          <div className="flex flex-col gap-[24px] items-start p-[16px] w-full">
            {/* Bad examples - cascade group 1 */}
            <div className="flex flex-col gap-[12px] items-start w-full">
              <TipRow type="bad" delay={0.3}>
                <WhiteText text="CONTAIN THE" />
                <Label text="LETTER" color="#9b95f0" />
                <Label text="E" color="#94caff" />
              </TipRow>

              <TipRow type="bad" delay={0.45}>
                <WhiteText text="START WITH THE" />
                <Label text="LETTER" color="#f8cd8b" />
                <Label text="L" color="#66e0c4" />
              </TipRow>

              <TipRow type="bad" delay={0.6}>
                <Label text="PLACES" color="#66e0c4" />
              </TipRow>
            </div>

            {/* Good examples - cascade group 2 */}
            <div className="flex flex-col gap-[12px] items-start w-full">
              <TipRow type="good" delay={0.9}>
                <Label text="GREEN" color="#66e0c4" />
                <Label text="THINGS" color="#94caff" />
              </TipRow>

              <TipRow type="good" delay={1.05}>
                <Label text="MAMMALS" color="#f8cd8b" />
              </TipRow>

              <TipRow type="good" delay={1.2}>
                <WhiteText text="ENDS IN" />
                <Label text="ANIMALS" color="#9b95f0" />
              </TipRow>
            </div>
          </div>
        </div>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          onClick={onContinue}
          className="bg-[#191919] flex items-center justify-center px-[24px] py-[12px] rounded-[50px] cursor-pointer active:scale-95 transition-transform"
        >
          <span className="font-bold text-[#fcfcfc] text-[15px] text-center leading-[22px]">
            Next
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Tips Page 2: Difficulty Order ───

const DIFFICULTY_SWATCHES = [
  { bg: "#dedcfa", border: "#9b95f0" },
  { bg: "#dbedff", border: "#94caff" },
  { bg: "#ccf5eb", border: "#66e0c4" },
  { bg: "#fdeed8", border: "#f8cd8b" },
];

export function TipsDifficultyScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center justify-start z-50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-[16px] items-center px-[16px] pt-[clamp(16px,3vh,24px)] pb-[24px] w-full max-w-[420px]">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-['Literata',serif] font-bold text-[#191919] text-[24px] leading-[34px] text-center"
        >
          Tips
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#191919] text-[15px] leading-[20px] font-normal text-center max-w-[358px]"
        >
          <p>There is only one solution for each puzzle, so watch out for red herrings and traps!</p>
          <p className="h-[0.8em]" />
          <p>The four groups are in order of difficulty, so the bottom one is usually hardest.</p>
        </motion.div>

        {/* Difficulty diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center px-[16px] py-[12px] w-full max-w-[390px]"
        >
          <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start shrink-0">
            {/* EASIEST label */}
            <p className="col-start-1 row-start-1 font-bold leading-[21px] ml-[34px] mt-[2px] text-[#191919] text-[16px] text-center whitespace-nowrap">
              EASIEST
            </p>
            {/* HARDEST label */}
            <p className="col-start-1 row-start-1 font-bold leading-[21px] ml-[34px] mt-[99px] text-[#191919] text-[16px] text-center whitespace-nowrap">
              HARDEST
            </p>
            {/* Color swatches */}
            {DIFFICULTY_SWATCHES.map((swatch, i) => (
              <div
                key={i}
                className="col-start-1 row-start-1 border border-solid rounded-[4px] size-[24px]"
                style={{ backgroundColor: swatch.bg, borderColor: swatch.border, marginTop: i * 32 }}
              />
            ))}
            {/* Arrow */}
            <div className="col-start-1 row-start-1 h-[42px] ml-[64.5px] mt-[39.5px] relative w-0">
              <div className="absolute inset-[0_-3.68px_-1.19%_-3.68px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36396 42.5">
                  <path d={arrowSvg.p20a951c0} fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Start game button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          onClick={onStart}
          className="bg-[#191919] flex items-center justify-center px-[24px] py-[12px] rounded-[50px] cursor-pointer active:scale-95 transition-transform"
        >
          <span className="font-bold text-[#fcfcfc] text-[15px] text-center leading-[22px]">
            Start game
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}