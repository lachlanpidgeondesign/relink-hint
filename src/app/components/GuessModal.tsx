import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface GuessModalProps {
  isOpen: boolean;
  selectedWords: string[];
  onSubmit: (guess: string) => void;
}

export function GuessModal({ isOpen, selectedWords, onSubmit }: GuessModalProps) {
  const [guess, setGuess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setGuess("");
      // Focus input after animation
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!guess.trim()) return;
    onSubmit(guess);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#fcfcfc] w-full max-w-sm rounded-lg p-6 flex flex-col gap-6 shadow-xl pointer-events-auto border border-[#ccc]">
              <h2 className="font-extrabold text-[18px] text-center uppercase tracking-wide">
                Guess the Link!
              </h2>

              <div className="flex justify-center gap-2">
                {selectedWords.map((word) => (
                  <div
                    key={word}
                    className="bg-[#333] rounded-[7px] size-[70px] sm:size-[80px] flex items-center justify-center p-1"
                  >
                     <span className="text-[#fcfcfc] text-[11px] sm:text-[12px] font-bold text-center leading-tight">
                       {word}
                     </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <input
                  ref={inputRef}
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Guess the link..."
                  className="w-full bg-[#f5f5f5] h-[44px] px-4 rounded-lg border border-[#ccc] focus:outline-none focus:border-[#f8cd8b] font-semibold text-[#191919] placeholder:text-[#666]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#fdeed8] h-[38px] rounded-full border border-[#f8cd8b] text-[#191919] font-semibold text-[15px] shadow-[0px_2px_0px_0px_#f8cd8b] active:translate-y-[1px] active:shadow-none transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
