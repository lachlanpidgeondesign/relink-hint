import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface GuessModalProps {
  isOpen: boolean;
  words: string[];
  onSubmit: (guess: string) => void;
}

export function GuessModal({ isOpen, words, onSubmit }: GuessModalProps) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onSubmit(guess);
      setGuess(""); // Reset for next time
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-6"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Guess the Link!</h2>
              <p className="text-slate-600">What connects these four words?</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {words.map((word) => (
                <span
                  key={word}
                  className="px-3 py-1 bg-slate-100 rounded-lg text-slate-800 font-medium text-sm border border-slate-200"
                >
                  {word}
                </span>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Guess the link..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg text-center"
                autoFocus
              />
              <button
                type="submit"
                disabled={!guess.trim()}
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Guess
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
