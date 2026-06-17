function WordContainer1() {
  return (
    <div className="bg-[#fdeed8] col-1 h-[60.25px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">FOOD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer2() {
  return (
    <div className="bg-[#fdeed8] col-2 h-[60.25px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">MOOD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer3() {
  return (
    <div className="bg-[#fdeed8] col-3 h-[60.25px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">RUDE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer4() {
  return (
    <div className="bg-[#fdeed8] col-4 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">PIZZA</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="flex-[1_0_0] gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] min-h-px min-w-px relative w-full" data-name="Row 1">
      <WordContainer1 />
      <WordContainer2 />
      <WordContainer3 />
      <WordContainer4 />
    </div>
  );
}

function Grouping() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="GROUPING">
      <Row />
    </div>
  );
}

function WordContainer5() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">GRASS</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer6() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">BURGER</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer7() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">EMERALD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer8() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">LIME</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full" data-name="Row 1">
      <WordContainer5 />
      <WordContainer6 />
      <WordContainer7 />
      <WordContainer8 />
    </div>
  );
}

function Grouping1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="GROUPING">
      <Row1 />
    </div>
  );
}

function WordContainer9() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">CHICKEN</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer10() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">RABBIT</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer11() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">DOG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer12() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">CAT</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full" data-name="Row 1">
      <WordContainer9 />
      <WordContainer10 />
      <WordContainer11 />
      <WordContainer12 />
    </div>
  );
}

function Grouping2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="GROUPING">
      <Row2 />
    </div>
  );
}

function WordContainer13() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">FAST</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer14() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">QUICK</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer15() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">FRIES</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer16() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">ZOOM</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full" data-name="Row 1">
      <WordContainer13 />
      <WordContainer14 />
      <WordContainer15 />
      <WordContainer16 />
    </div>
  );
}

function Grouping3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="GROUPING">
      <Row3 />
    </div>
  );
}

function WordContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[277px] items-start max-w-[358px] px-[12px] relative shrink-0 w-[358px]" data-name="Word Container">
      <Grouping />
      <Grouping1 />
      <Grouping2 />
      <Grouping3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[390px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] min-w-full relative shrink-0 text-[#191919] text-[24px] text-center w-[min-content]">Welcome to Relink</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#191919] text-[0px] text-[15px] text-center w-[min-content] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">Unlink the four imposters from each of the four groups.</p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[20px]">{`Then use the remaining tiles to deduce what those four items have in common to `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">RELINK</span>
          <span className="leading-[20px]">{` them.`}</span>
        </p>
      </div>
      <WordContainer />
    </div>
  );
}

function PuzzleButton() {
  return (
    <div className="bg-[#191919] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[50px] shrink-0" data-name="Puzzle Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[17px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Play tutorial</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[390px] relative shrink-0 w-full">
      <PuzzleButton />
    </div>
  );
}

export default function HowToPlay() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[32px] items-center p-[16px] relative size-full" data-name="How to play - 1">
      <Container />
      <Frame />
    </div>
  );
}