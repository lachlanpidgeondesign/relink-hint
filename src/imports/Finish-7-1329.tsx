import svgPaths from "./svg-qgb4lroh3l";

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

function ConnectionsIcon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Connections - Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_2_589)" id="Connections - Icon">
          <path d={svgPaths.p1ae23400} fill="var(--fill-0, #D9D9D9)" id="Vector" />
          <g id="Mask group">
            <mask height="27" id="mask0_2_589" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="0">
              <g id="Group">
                <path d={svgPaths.pb153600} fill="var(--fill-0, white)" id="Vector_2" />
                <path d={svgPaths.p1ae23400} fill="var(--fill-0, black)" id="Vector_3" />
              </g>
            </mask>
            <g mask="url(#mask0_2_589)">
              <path d={svgPaths.p1142d300} fill="var(--fill-0, #926725)" id="Vector_4" />
            </g>
          </g>
          <path d={svgPaths.p1f109700} fill="var(--fill-0, #926725)" id="Vector_5" />
          <g id="Mask group_2">
            <mask height="27" id="mask1_2_589" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="1">
              <g id="Group_2">
                <path d={svgPaths.pf13f000} fill="var(--fill-0, white)" id="Vector_6" />
                <path d={svgPaths.p1f109700} fill="var(--fill-0, black)" id="Vector_7" />
              </g>
            </mask>
            <g mask="url(#mask1_2_589)">
              <path d={svgPaths.p3c9bde80} fill="var(--fill-0, #926725)" id="Vector_8" />
            </g>
          </g>
          <path d={svgPaths.p155b7c80} fill="var(--fill-0, #FEF7EC)" id="Vector_9" />
          <path d={svgPaths.p1deb26f0} fill="var(--fill-0, #FEF7EC)" id="Vector_10" />
          <path d={svgPaths.p37d65700} fill="var(--fill-0, #FEF7EC)" id="Vector_11" />
          <path d={svgPaths.p1b6ce2c0} fill="var(--fill-0, #F8CD8B)" id="Vector_12" />
          <path d={svgPaths.p162d8800} fill="var(--fill-0, #926725)" id="Vector_13" />
          <path d={svgPaths.p10077800} fill="var(--fill-0, #F8CD8B)" id="Vector_14" />
          <path d={svgPaths.p362ec880} fill="var(--fill-0, #926725)" id="Vector_15" />
          <path d={svgPaths.p1ef25100} fill="var(--fill-0, #F8CD8B)" id="Vector_16" />
          <path d={svgPaths.p28e74c00} fill="var(--fill-0, #926725)" id="Vector_17" />
          <path d={svgPaths.p1f997980} fill="var(--fill-0, #F3AC3D)" id="Vector_18" />
          <path d={svgPaths.p2e763300} fill="var(--fill-0, #926725)" id="Vector_19" />
        </g>
        <defs>
          <clipPath id="clip0_2_589">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function More() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="More">
          <path d={svgPaths.p2f5eb8f0} fill="var(--fill-0, #191919)" id="Vector" stroke="var(--stroke-0, #191919)" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex h-[28px] items-center px-[4px] py-[6px] relative rounded-[99px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <More />
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
    <div className="bg-[#fdeed8] content-stretch flex h-[44px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-[390px]" data-name="Puzzle Header">
      <div aria-hidden="true" className="absolute border-[#f8cd8b] border-b border-solid inset-0 pointer-events-none" />
      <LhContainer />
      <ConnectionsIcon />
      <RhContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fdeed8] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <PuzzleHeader />
    </div>
  );
}

function TextEntry() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0" data-name="Text Entry">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[13px] text-center text-ellipsis">Guess the link</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer1() {
  return (
    <div className="bg-[#f8cd8b] col-1 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative size-full">
          <TextEntry />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">HAIL, RAIN, SLEET, SNOW</p>
        </div>
      </div>
    </div>
  );
}

function TextEntry1() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0" data-name="Text Entry">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[13px] text-center text-ellipsis">Guess the link</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link Container">
      <TextEntry1 />
    </div>
  );
}

function WordContainer2() {
  return (
    <div className="bg-[#66e0c4] col-1 content-stretch flex flex-col gap-[4px] h-[80.5px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] row-2 shrink-0 w-[358px]" data-name="Word Container">
      <LinkContainer />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">OPTION, RETURN, SHIFT, TAB</p>
    </div>
  );
}

function TextEntry2() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0" data-name="Text Entry">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[13px] text-center text-ellipsis">Guess the link</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer3() {
  return (
    <div className="bg-[#87d1dc] col-1 content-stretch flex flex-col gap-[4px] h-[80.5px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] row-3 shrink-0 w-[358px]" data-name="Word Container">
      <TextEntry2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">BUCKS, HEAT, JAZZ, NETS</p>
    </div>
  );
}

function TextEntry3() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0" data-name="Text Entry">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[13px] text-center text-ellipsis">Guess the link</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer4() {
  return (
    <div className="bg-[#9aa3ff] col-1 content-stretch flex flex-col gap-[4px] h-[80.5px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] row-4 shrink-0 w-[358px]" data-name="Word Container">
      <TextEntry3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[13px] text-black text-center text-ellipsis">LEVEL, KAYAK, MOM, RACECAR</p>
    </div>
  );
}

function WordContainer() {
  return (
    <div className="aspect-[268/268] max-h-[500px] max-w-[500px] relative shrink-0 w-full" data-name="Word Container">
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] max-h-[inherit] max-w-[inherit] p-[16px] relative size-full">
        <WordContainer1 />
        <WordContainer2 />
        <WordContainer3 />
        <WordContainer4 />
      </div>
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
            <p className="leading-[20px]">Submit link guesses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2px] relative" data-name="Puzzle Button">
      <PuzzleButton1 />
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="max-w-[500px] relative shrink-0 w-full" data-name="Buttons Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[8px] py-[16px] relative w-full">
          <PuzzleButton />
        </div>
      </div>
    </div>
  );
}

export default function Finish() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-center relative size-full" data-name="Finish">
      <Header />
      <WordContainer />
      <ButtonsContainer />
    </div>
  );
}