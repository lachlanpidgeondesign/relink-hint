function LinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">???</p>
    </div>
  );
}

function WordContainer() {
  return (
    <div className="bg-[#9aa3ff] h-[80.5px] relative rounded-[8px] shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative size-full">
          <LinkContainer />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">LEVEL, KAYAK, MOM, RACECAR</p>
        </div>
      </div>
    </div>
  );
}

function TextEntry() {
  return (
    <div className="bg-[#f5f5f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Text Entry">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#666] text-[15px]">Guess the link...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PuzzleButton1() {
  return (
    <div className="bg-[#fdeed8] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#f8cd8b]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start pb-[2px] relative shrink-0 w-full" data-name="Puzzle Button">
      <PuzzleButton1 />
    </div>
  );
}

function TextEntrySubmitContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Entry + Submit Container">
      <TextEntry />
      <PuzzleButton />
    </div>
  );
}

export default function GuessTheLink() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative rounded-[8px] size-full" data-name="Guess the link">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Literata:ExtraBold',sans-serif] font-extrabold leading-[20px] relative shrink-0 text-[18px] text-black text-center w-full whitespace-pre-wrap">GUESS THE LINK!</p>
      <WordContainer />
      <TextEntrySubmitContainer />
    </div>
  );
}