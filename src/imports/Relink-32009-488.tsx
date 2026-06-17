import svgPaths from "./svg-fmn5sz0424";

function WordContainer() {
  return (
    <div className="bg-[#fdeed8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">IMPERIAL</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer1() {
  return (
    <div className="bg-[#fdeed8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">POLO</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer2() {
  return (
    <div className="bg-[#fdeed8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">HUMBUG</p>
        </div>
      </div>
    </div>
  );
}

function WordRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Word Row">
      <WordContainer />
      <WordContainer1 />
      <WordContainer2 />
    </div>
  );
}

function Label() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f8cd8b] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MINTS</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="bg-[#fadeb1] col-[1/span_3] justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Link Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <WordRow />
          <Label />
        </div>
      </div>
    </div>
  );
}

function WordContainer3() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[11px] text-center text-ellipsis whitespace-nowrap">COURTYARD</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative size-full">
          <WordContainer3 />
        </div>
      </div>
    </div>
  );
}

function RowContainer() {
  return (
    <div className="flex-[1_0_0] gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full" data-name="ROW CONTAINER">
      <LinkContainer />
      <OddContainer />
    </div>
  );
}

function WordContainer4() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">COMPANIES</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer5() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">PLATOONS</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer6() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">UNITS</p>
        </div>
      </div>
    </div>
  );
}

function WordRow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Word Row">
      <WordContainer4 />
      <WordContainer5 />
      <WordContainer6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#66e0c4] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MILITARY ORGANISATIONS</p>
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="bg-[#99ebd8] col-[1/span_3] justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Link Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <WordRow1 />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function WordContainer7() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[11px] text-center text-ellipsis whitespace-nowrap">COMPOUNDS</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer1() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative size-full">
          <WordContainer7 />
        </div>
      </div>
    </div>
  );
}

function RowContainer1() {
  return (
    <div className="flex-[1_0_0] gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full" data-name="ROW CONTAINER">
      <LinkContainer1 />
      <OddContainer1 />
    </div>
  );
}

function WordContainer8() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[12px] text-center text-ellipsis whitespace-nowrap">
            ENGLISH
            <br aria-hidden="true" />
            BREAKFAST
          </p>
        </div>
      </div>
    </div>
  );
}

function WordContainer9() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">COKE</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer10() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">RED BULL</p>
        </div>
      </div>
    </div>
  );
}

function WordRow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Word Row">
      <WordContainer8 />
      <WordContainer9 />
      <WordContainer10 />
    </div>
  );
}

function Label2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e583b1] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">CAFFEINATED DRINKS</p>
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="bg-[#edaccb] col-[1/span_3] justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Link Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <WordRow2 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function WordContainer11() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[11px] text-center text-ellipsis whitespace-nowrap">CHAMOMILE</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer2() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative size-full">
          <WordContainer11 />
        </div>
      </div>
    </div>
  );
}

function RowContainer2() {
  return (
    <div className="flex-[1_0_0] gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full" data-name="ROW CONTAINER">
      <LinkContainer2 />
      <OddContainer2 />
    </div>
  );
}

function WordContainer12() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">LITRE</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer13() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">COLOUR</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer14() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">GREY</p>
        </div>
      </div>
    </div>
  );
}

function WordRow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Word Row">
      <WordContainer12 />
      <WordContainer13 />
      <WordContainer14 />
    </div>
  );
}

function Label3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#87d1dc] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">US VS UK SPELLINGS</p>
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="bg-[#afe1e7] col-[1/span_3] justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Link Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <WordRow3 />
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function WordContainer15() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">RENOUNCE</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer3() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative size-full">
          <WordContainer15 />
        </div>
      </div>
    </div>
  );
}

function RowContainer3() {
  return (
    <div className="flex-[1_0_0] gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full" data-name="ROW CONTAINER">
      <LinkContainer3 />
      <OddContainer3 />
    </div>
  );
}

function GameContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[324px] items-start left-0 max-w-[500px] px-[16px] py-[12px] top-[76px] w-[390px]" data-name="Game Container">
      <RowContainer />
      <RowContainer1 />
      <RowContainer2 />
      <RowContainer3 />
    </div>
  );
}

function Tagline() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 pt-[12px] px-[8px] top-[44px] w-[390px]" data-name="TAGLINE">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">Select from the remaining tiles to build the relink</p>
    </div>
  );
}

function PuzzleButton() {
  return (
    <div className="bg-[#dde0ff] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#9aa3ff]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Shuffle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton1() {
  return (
    <div className="bg-[#dde0ff] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#9aa3ff]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton2() {
  return (
    <div className="bg-[#dde0ff] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#9aa3ff]" />
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

function ButtonsContainer() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[-1px] max-w-[500px] pt-[8px] px-[12px] top-[507px] w-[390px]" data-name="Buttons Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton2 />
      </div>
    </div>
  );
}

function WordContainer16() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[9px] text-center text-ellipsis whitespace-nowrap">COURTYARD</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer17() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[9px] text-center text-ellipsis whitespace-nowrap">COMPOUNDS</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer18() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[9px] text-center text-ellipsis whitespace-nowrap">CHAMOMILE</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer19() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[9px] text-center text-ellipsis whitespace-nowrap">RENOUNCE</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ccc] content-stretch flex flex-col gap-[12px] h-[300px] items-start left-[291px] overflow-clip p-[8px] rounded-[8px] top-[88px] w-[83px]">
      <WordContainer16 />
      <WordContainer17 />
      <WordContainer18 />
      <WordContainer19 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-0 relative shrink-0 text-[#191919] text-[15px] whitespace-nowrap">00:00</p>
    </div>
  );
}

function LhContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[116px]" data-name="LH Container">
      <Logo />
    </div>
  );
}

function MeteorIconsChain() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="meteor-icons:chain">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="meteor-icons:chain">
          <g filter="url(#filter0_d_32009_511)" id="Vector (Stroke)">
            <path d={svgPaths.p1cf6fa00} fill="var(--fill-0, #EEF0FF)" />
            <path d={svgPaths.p1cf6fa00} stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.933333" />
          </g>
          <g filter="url(#filter1_d_32009_511)" id="Vector (Stroke)_2">
            <path d={svgPaths.p1ba02cf0} fill="var(--fill-0, #5665FF)" />
            <path d={svgPaths.p1ba02cf0} stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.933333" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.8667" id="filter0_d_32009_511" width="26.6" x="0.699886" y="6.53333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.933333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.239216 0 0 0 0 0.6 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_32009_511" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_32009_511" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter1_d_32009_511" width="12.6" x="7.69989" y="12.3666">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.933333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.239216 0 0 0 0 0.6 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_32009_511" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_32009_511" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex h-[28px] items-center px-[4px] py-[6px] relative rounded-[99px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9aa3ff] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="More">
        <div className="absolute inset-[41.67%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3.33333">
            <path d={svgPaths.p3971cf00} fill="var(--fill-0, #191919)" id="Vector" stroke="var(--stroke-0, #191919)" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RhContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[116px]" data-name="RH Container">
      <Button />
    </div>
  );
}

function PuzzleHeader() {
  return (
    <div className="bg-[#dde0ff] content-stretch flex h-[44px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-[390px]" data-name="Puzzle Header">
      <div aria-hidden="true" className="absolute border-[#9aa3ff] border-b border-solid inset-0 pointer-events-none" />
      <LhContainer />
      <MeteorIconsChain />
      <RhContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#dde0ff] content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Header">
      <PuzzleHeader />
    </div>
  );
}

function SubmitContainer() {
  return (
    <div className="bg-[#fcfcfc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitContainer1() {
  return (
    <div className="bg-[#fcfcfc] col-1 h-[65px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ccc] relative rounded-[8px] shrink-0 w-full" data-name="CONTAINER">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-x-[6px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] p-[8px] relative w-full">
          <SubmitContainer />
          <SubmitContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] rounded-[16px] top-[400px] w-[390px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Mistakes() {
  return (
    <div className="absolute h-[26px] left-[-1px] top-[481px] w-[390px]" data-name="Mistakes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 26">
        <g id="Mistakes">
          <circle cx="163" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 1" r="5" />
          <circle cx="179" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 2" r="5" />
          <circle cx="195" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 5" r="5" />
          <circle cx="211" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 6" r="5" />
          <circle cx="227" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 7" r="5" />
        </g>
      </svg>
    </div>
  );
}

export default function Relink() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="Relink">
      <GameContainer />
      <Tagline />
      <ButtonsContainer />
      <Frame />
      <Header />
      <Container />
      <Mistakes />
    </div>
  );
}