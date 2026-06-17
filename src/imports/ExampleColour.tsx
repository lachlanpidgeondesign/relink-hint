function WordContainer() {
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

function WordContainer1() {
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

function WordContainer2() {
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

function WordContainer3() {
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

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative w-full" data-name="Row 1">
      <WordContainer />
      <WordContainer1 />
      <WordContainer2 />
      <WordContainer3 />
    </div>
  );
}

function Grouping() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60.25px] items-start left-0 top-0 w-[334px]" data-name="GROUPING">
      <Row />
    </div>
  );
}

function WordContainer4() {
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

function WordContainer5() {
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

function WordContainer6() {
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

function WordRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Word Row">
      <WordContainer4 />
      <WordContainer5 />
      <WordContainer6 />
    </div>
  );
}

function Label() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e583b1] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MAMMALS</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="bg-[#edaccb] col-[1/span_3] justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Link Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <WordRow />
          <Label />
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">CHICKEN</p>
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
          <WordContainer7 />
        </div>
      </div>
    </div>
  );
}

function RowContainer() {
  return (
    <div className="absolute gap-x-[9px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[63.25px] left-0 top-[78px] w-[326px]" data-name="ROW CONTAINER">
      <LinkContainer />
      <OddContainer />
    </div>
  );
}

export default function ExampleColour() {
  return (
    <div className="relative size-full" data-name="Example colour">
      <Grouping />
      <RowContainer />
    </div>
  );
}