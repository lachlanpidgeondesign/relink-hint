import svgPaths from "./svg-olil38vaiu";
import { imgGroup } from "./svg-jqx1f";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[4px] relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center">Tap words from the groups to build your answer.</p>
    </div>
  );
}

function SubmitContainer() {
  return (
    <div className="col-1 h-[70px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitContainer1() {
  return (
    <div className="col-2 h-[70px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitContainer2() {
  return (
    <div className="col-3 h-[70px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] px-[16px] py-[8px] relative w-full">
        <SubmitContainer />
        <SubmitContainer1 />
        <SubmitContainer2 />
      </div>
    </div>
  );
}

function Mistakes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mistakes">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[10px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #666666)" id="Ellipse 1" r="5" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[10px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #666666)" id="Ellipse 1" r="5" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[10px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #666666)" id="Ellipse 1" r="5" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[10px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #E3E3E3)" id="Ellipse 4" r="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton() {
  return (
    <div className="bg-[#ccc] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#ccc]" />
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

function PuzzleButton1() {
  return (
    <div className="bg-[#ccc] h-[36px] relative rounded-[50px] shrink-0 w-full" data-name="Puzzle Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_2px_0px_0px_#ccc]" />
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
    <div className="max-w-[500px] relative shrink-0 w-full" data-name="Buttons Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center max-w-[inherit] pt-[8px] px-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-40 pb-[2px] relative" data-name="Puzzle Button">
            <PuzzleButton />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-40 pb-[2px] relative" data-name="Puzzle Button">
            <PuzzleButton1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fcfcfc] bottom-0 content-stretch flex flex-col items-start justify-center left-0 max-w-[500px] py-[12px] w-[390px]">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Frame2 />
      <Frame />
      <Mistakes />
      <ButtonsContainer />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-0 relative shrink-0 text-[#191919] text-[15px]">00:00</p>
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

function Group() {
  return (
    <div className="absolute inset-[0.56%_2.78%_5%_2.78%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.5px_1.5px] mask-size-[82px_82px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4444 26.4444">
        <g id="Group">
          <path d={svgPaths.p1efeff80} fill="var(--fill-0, #FDEED8)" id="Vector" />
          <path d={svgPaths.p13a3b980} fill="var(--fill-0, #191919)" id="Vector (Stroke)" />
          <path d={svgPaths.pc6ccb00} fill="var(--fill-0, #FDEED8)" id="Vector_2" />
          <path d={svgPaths.p1c958980} fill="var(--fill-0, #191919)" id="Vector (Stroke)_2" />
          <path d={svgPaths.p363c4980} fill="var(--fill-0, #FDEED8)" id="Vector_3" />
          <path d={svgPaths.p3e897600} fill="var(--fill-0, #191919)" id="Vector (Stroke)_3" />
          <path d={svgPaths.p28fec680} fill="var(--fill-0, #333333)" id="Vector_4" />
          <path d={svgPaths.p24698000} fill="var(--fill-0, #191919)" id="Vector (Stroke)_4" />
          <path d={svgPaths.pd5b9000} fill="var(--fill-0, #CCF5EB)" id="Vector_5" />
          <path d={svgPaths.p232d16c0} fill="var(--fill-0, #191919)" id="Vector (Stroke)_5" />
          <path d={svgPaths.p27403e00} fill="var(--fill-0, #333333)" id="Vector_6" />
          <path d={svgPaths.p1d705b00} fill="var(--fill-0, #191919)" id="Vector (Stroke)_6" />
          <path d={svgPaths.p1bb2ca00} fill="var(--fill-0, #CCF5EB)" id="Vector_7" />
          <path d={svgPaths.p3c616b00} fill="var(--fill-0, #191919)" id="Vector (Stroke)_7" />
          <path d={svgPaths.p8b51280} fill="var(--fill-0, #CCF5EB)" id="Vector_8" />
          <path d={svgPaths.p2301700} fill="var(--fill-0, #191919)" id="Vector (Stroke)_8" />
          <path d={svgPaths.p26be900} fill="var(--fill-0, #F6D6E5)" id="Vector_9" />
          <path d={svgPaths.p97d6880} fill="var(--fill-0, #191919)" id="Vector (Stroke)_9" />
          <path d={svgPaths.p36ed58c0} fill="var(--fill-0, #F6D6E5)" id="Vector_10" />
          <path d={svgPaths.p47fe600} fill="var(--fill-0, #191919)" id="Vector (Stroke)_10" />
          <path d={svgPaths.p2fca1a00} fill="var(--fill-0, #333333)" id="Vector_11" />
          <path d={svgPaths.p32ff9000} fill="var(--fill-0, #191919)" id="Vector (Stroke)_11" />
          <path d={svgPaths.p2d718300} fill="var(--fill-0, #F6D6E5)" id="Vector_12" />
          <path d={svgPaths.p39675400} fill="var(--fill-0, #191919)" id="Vector (Stroke)_12" />
          <path d={svgPaths.pafcedd0} fill="var(--fill-0, #333333)" id="Vector_13" />
          <path d={svgPaths.p221e2e80} fill="var(--fill-0, #191919)" id="Vector (Stroke)_13" />
          <path d={svgPaths.p2b0eca00} fill="var(--fill-0, #DDE0FF)" id="Vector_14" />
          <path d={svgPaths.p4c27ec0} fill="var(--fill-0, #191919)" id="Vector (Stroke)_14" />
          <path d={svgPaths.p2c72c140} fill="var(--fill-0, #DDE0FF)" id="Vector_15" />
          <path d={svgPaths.p128ee900} fill="var(--fill-0, #191919)" id="Vector (Stroke)_15" />
          <path d={svgPaths.paf05f00} fill="var(--fill-0, #DDE0FF)" id="Vector_16" />
          <path d={svgPaths.p3c23d780} fill="var(--fill-0, #191919)" id="Vector (Stroke)_16" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[2.22%_4.44%_6.67%_4.44%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex h-[28px] items-center px-[4px] py-[6px] relative rounded-[99px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[99px]" />
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

function Header() {
  return (
    <div className="absolute bg-[#fdeed8] content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Header">
      <div className="bg-[#fdeed8] content-stretch flex h-[44px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-[390px]" data-name="Puzzle Header">
        <div aria-hidden="true" className="absolute border-[#f8cd8b] border-b border-solid inset-0 pointer-events-none" />
        <LhContainer />
        <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Odd One In - Icon">
          <ClipPathGroup />
          <div className="absolute inset-[0_2.22%_4.44%_2.22%]" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7556 26.7556">
              <path d={svgPaths.p313faa00} fill="var(--fill-0, #191919)" id="Vector (Stroke)" />
            </svg>
          </div>
          <div className="absolute inset-[93.33%_2.22%_0_2.22%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7556 1.86667">
              <path d={svgPaths.p19dcc300} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
        <RhContainer />
      </div>
    </div>
  );
}

function WordContainer() {
  return (
    <div className="bg-[#fdeed8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">AIRWAYS</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">RUNWAYS</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">AIRPORTS</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">AEROPLANES’ ROUTES</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="bg-[#fadeb1] col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link Container">
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis">SYDNEY</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-stretch py-[8px] relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <WordContainer3 />
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">BRITISH</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">SCIENCE</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[11px] text-center">
            {`LONDON `}
            <br aria-hidden="true" />
            TRANSPORT
          </p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">LONDON MUSEUMS</p>
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="bg-[#99ebd8] col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link Container">
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis">PARIS</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer1() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-stretch py-[8px] relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <WordContainer7 />
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
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">BONDI</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer9() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[10px] text-center text-ellipsis">COPOCABANA</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer10() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center">
            {`SANTA `}
            <br aria-hidden="true" />
            MONICA
          </p>
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
    <div className="-translate-x-1/2 absolute bg-[#87d1dc] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">BEACH GETAWAYS</p>
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="bg-[#afe1e7] col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link Container">
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis">NEW YORK</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer2() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-stretch py-[8px] relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <WordContainer11 />
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
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[10px] text-center text-ellipsis">DESTINATIONS</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer13() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">ESTATES</p>
        </div>
      </div>
    </div>
  );
}

function WordContainer14() {
  return (
    <div className="bg-[#dde0ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#333] text-[13px] text-center">ENGLAND</p>
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
    <div className="-translate-x-1/2 absolute bg-[#9aa3ff] content-stretch flex items-center justify-center left-[calc(50%-0.13px)] px-[6px] py-[2px] rounded-[4px] top-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis">END IN WORDS FOR COUNTRIES</p>
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="bg-[#bbc1ff] col-[1/span_3] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link Container">
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis">LONDON</p>
        </div>
      </div>
    </div>
  );
}

function OddContainer3() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-stretch py-[8px] relative row-1 self-stretch shrink-0" data-name="Odd Container">
      <WordContainer15 />
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
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 max-w-[500px] px-[16px] py-[12px] size-[390px] top-[44px]" data-name="Game Container">
      <RowContainer />
      <RowContainer1 />
      <RowContainer2 />
      <RowContainer3 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="Start">
      <Frame1 />
      <Header />
      <GameContainer />
    </div>
  );
}