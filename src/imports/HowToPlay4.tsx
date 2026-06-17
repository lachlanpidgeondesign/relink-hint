function WordContainer() {
  return (
    <div className="bg-[#fdeed8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">FOOD</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MOOD</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">RUDE</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">RHYME TIME</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">PIZZA</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[12px] text-center text-ellipsis whitespace-nowrap">GRASS</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">EMERALD</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">LIME</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">GREEN THINGS</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">BURGER</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[12px] text-center text-ellipsis whitespace-nowrap">RABBIT</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">DOG</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">CAT</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MAMMALS</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">CHICKEN</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">FAST</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">QUICK</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">ZOOM</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">SPEEDY</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">FRIES</p>
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

function WordContainer16() {
  return (
    <div className="bg-[#333] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">PIZZA</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis whitespace-nowrap">BURGER</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis whitespace-nowrap">CHICKEN</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">FRIES</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#ccc] content-stretch flex flex-col gap-[12px] h-[277px] items-start left-[267px] overflow-clip p-[8px] rounded-[8px] top-0 w-[75px]">
      <WordContainer16 />
      <WordContainer17 />
      <WordContainer18 />
      <WordContainer19 />
    </div>
  );
}

function GameContainer() {
  return (
    <div className="h-[277px] max-w-[500px] relative shrink-0 w-full" data-name="Game Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] px-[16px] relative size-full">
        <RowContainer />
        <RowContainer1 />
        <RowContainer2 />
        <RowContainer3 />
        <Frame2 />
      </div>
    </div>
  );
}

function SubmitContainer() {
  return (
    <div className="bg-[#fcfcfc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitContainer1() {
  return (
    <div className="bg-[#fcfcfc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#e3e3e3] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="CONTAINER">
      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] p-[12px] relative size-full">
        <SubmitContainer />
        <SubmitContainer1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[73px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start justify-center max-w-[500px] relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function PuzzleButton() {
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[358px]">
      <GameContainer />
      <Frame1 />
      <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-[326px]" data-name="Puzzle Button">
        <PuzzleButton />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] min-w-full relative shrink-0 text-[#191919] text-[24px] text-center w-[min-content]">Get started</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center w-[358px] whitespace-pre-wrap">
        Relink the four imposters by deducing how they are linked.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Build your guess using the remaining 12 tiles to fill in the empty squares at the bottom.
      </p>
      <Frame />
    </div>
  );
}

export default function HowToPlay() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-center p-[16px] relative size-full" data-name="How to play - 4">
      <Container />
    </div>
  );
}