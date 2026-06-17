import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface RelinkAnimationProps {
  phase: number;
  tileRefs: Record<number, HTMLDivElement | null>;
  containerEl: HTMLDivElement | null;
}

export function RelinkAnimation({ phase, tileRefs, containerEl }: RelinkAnimationProps) {
  const [mergePoint, setMergePoint] = useState<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const measured = useRef(false);

  useEffect(() => {
    if (phase < 1 || !containerEl || measured.current) return;
    const cRect = containerEl.getBoundingClientRect();
    const ys: number[] = [];
    let cx = 0;
    for (let i = 0; i < 4; i++) {
      const el = tileRefs[i];
      if (el) {
        const r = el.getBoundingClientRect();
        cx = r.left - cRect.left + r.width / 2;
        ys.push(r.top - cRect.top + r.height / 2);
      }
    }
    if (ys.length === 4) {
      setMergePoint({ x: cx, y: (Math.min(...ys) + Math.max(...ys)) / 2 });
      setSize({ w: cRect.width, h: cRect.height });
      measured.current = true;
    }
  }, [phase, containerEl, tileRefs]);

  if (!mergePoint || phase < 2) return null;

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size.w}
      height={size.h}
      style={{ zIndex: 15, overflow: "visible" }}
    >
      <defs>
        <filter id="merge-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft horizontal line where the two halves meet */}
      <motion.line
        x1={mergePoint.x - 30}
        y1={mergePoint.y}
        x2={mergePoint.x + 30}
        y2={mergePoint.y}
        stroke="rgba(255,255,255,0.5)"
        strokeWidth={2}
        strokeLinecap="round"
        filter="url(#merge-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
