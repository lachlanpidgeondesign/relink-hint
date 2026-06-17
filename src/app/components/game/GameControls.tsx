interface GameControlsProps {
  onShuffle: () => void;
  onDeselectAll: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
  canShuffle: boolean;
  hasSelection: boolean;
}

export function GameControls({
  onShuffle,
  onDeselectAll,
  onSubmit,
  canSubmit,
  canShuffle,
  hasSelection,
}: GameControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onShuffle}
        disabled={!canShuffle}
        className="px-6 py-2.5 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Shuffle
      </button>
      <button
        onClick={onDeselectAll}
        disabled={!hasSelection}
        className="px-6 py-2.5 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Deselect All
      </button>
      <button
        onClick={onSubmit}
        disabled={!canSubmit}
        className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Submit
      </button>
    </div>
  );
}
