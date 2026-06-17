import { HtpAnimation } from "../app/components/HtpAnimation";

function Frame() {
  return (
    <div className="bg-[#191919] content-stretch flex flex-col items-center justify-center relative rounded-[99px] shrink-0 size-[32px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#fcfcfc] text-[15px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[20px] min-h-px min-w-px not-italic relative text-[#191919] text-[15px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">Find the imposters</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Each of the four rows has an imposter that doesn’t belong with the other three tiles. Find them one at a time.</p>
    </div>
  );
}

function Rule() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="Rule">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#191919] content-stretch flex flex-col items-center justify-center relative rounded-[99px] shrink-0 size-[32px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#fcfcfc] text-[15px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[20px] min-h-px min-w-px not-italic relative text-[#191919] text-[15px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">Build the Relink</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Once you’ve found all four, deduce what links them. Use the remaining tiles to build the Relink.</p>
    </div>
  );
}

function Rule1() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-full" data-name="Rule">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative shrink-0 w-[358px]">
      <Rule />
      <Rule1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[390px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] min-w-full relative shrink-0 text-[#191919] text-[24px] text-center w-[min-content]">How to Play Relink</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] w-[358px] mt-[16px]">Find the imposters, build the Relink.</p>
      <div className="mt-[16px] w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function PuzzleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#191919] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[50px] shrink-0 cursor-pointer active:scale-95 transition-transform"
      data-name="Puzzle Button"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[17px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Play tutorial</p>
      </div>
    </button>
  );
}

function Frame5({ onStart }: { onStart: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[390px] relative shrink-0 w-full">
      <PuzzleButton onClick={onStart} />
    </div>
  );
}

export default function HtpFromMenu({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[24px] relative size-full" data-name="HTP from Menu - 5">
      <Container />
      <Frame5 onStart={onStart} />
    </div>
  );
}