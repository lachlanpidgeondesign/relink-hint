import svgPaths from "./svg-j06rs23j3u";

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
          <g filter="url(#filter0_d_22001_486)" id="Vector (Stroke)">
            <path d={svgPaths.p1cf6fa00} fill="var(--fill-0, #FEF7EC)" />
            <path d={svgPaths.p1cf6fa00} stroke="var(--stroke-0, #926725)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.933333" />
          </g>
          <g filter="url(#filter1_d_22001_486)" id="Vector (Stroke)_2">
            <path d={svgPaths.p1ba02cf0} fill="var(--fill-0, #F3AC3D)" />
            <path d={svgPaths.p1ba02cf0} stroke="var(--stroke-0, #926725)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.933333" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.8667" id="filter0_d_22001_486" width="26.6" x="0.699886" y="6.53333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.933333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.572549 0 0 0 0 0.403922 0 0 0 0 0.145098 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_22001_486" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_22001_486" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter1_d_22001_486" width="12.6" x="7.69989" y="12.3666">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.933333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.572549 0 0 0 0 0.403922 0 0 0 0 0.145098 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_22001_486" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_22001_486" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
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

function PuzzleHeader() {
  return (
    <div className="bg-[#fdeed8] content-stretch flex h-[44px] items-center justify-between px-[12px] py-[8px] relative shrink-0 w-[390px]" data-name="Puzzle Header">
      <div aria-hidden="true" className="absolute border-[#f8cd8b] border-b border-solid inset-0 pointer-events-none" />
      <LhContainer />
      <MeteorIconsChain />
      <RhContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#fdeed8] content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Header">
      <PuzzleHeader />
    </div>
  );
}

function SubmitContainer() {
  return (
    <div className="bg-[#fcfcfc] col-1 h-[65px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitContainer1() {
  return (
    <div className="bg-[#fcfcfc] col-2 h-[65px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Submit Container">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#666] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#e3e3e3] relative rounded-[8px] shrink-0 w-full" data-name="CONTAINER">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_#191919]" />
      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] p-[12px] relative w-full">
        <SubmitContainer />
        <SubmitContainer1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-30 px-[12px] relative rounded-[16px] w-[390px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#fcfcfc] content-stretch flex flex-col h-[105px] items-start justify-center left-0 max-w-[500px] py-[8px] top-[400px] w-[390px]">
      <Container />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-[calc(50%+0.5px)]" data-name="ico-lock">
        <div className="absolute inset-[0_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
            <path d={svgPaths.p35cd9500} fill="var(--fill-0, #333333)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Mistakes() {
  return (
    <div className="absolute h-[26px] left-0 top-[505px] w-[390px]" data-name="Mistakes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 26">
        <g id="Mistakes">
          <circle cx="171" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 1" r="5" />
          <circle cx="187" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 2" r="5" />
          <circle cx="203" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 5" r="5" />
          <circle cx="219" cy="13" fill="var(--fill-0, #666666)" id="Ellipse 6" r="5" />
        </g>
      </svg>
    </div>
  );
}

function WordContainer1() {
  return (
    <div className="bg-[#fdeed8] col-1 h-[66px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">IMPERIAL</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer2() {
  return (
    <div className="bg-[#fdeed8] col-2 h-[66px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">POLO</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer3() {
  return (
    <div className="bg-[#fdeed8] col-3 h-[66px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">HUMBUG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer4() {
  return (
    <div className="bg-[#fdeed8] col-4 h-[66px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[11px] text-center text-ellipsis whitespace-nowrap">COURTYARD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Row 1">
      <WordContainer1 />
      <WordContainer2 />
      <WordContainer3 />
      <WordContainer4 />
    </div>
  );
}

function Grouping() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GROUPING">
      <Row />
    </div>
  );
}

function WordContainer5() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[12px] text-center text-ellipsis whitespace-nowrap">COMPANIES</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer6() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">PLATOONS</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer7() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[10px] text-center text-ellipsis whitespace-nowrap">COMPOUNDS</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer8() {
  return (
    <div className="bg-[#ccf5eb] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">UNITS</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#66e0c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Row 1">
      <WordContainer5 />
      <WordContainer6 />
      <WordContainer7 />
      <WordContainer8 />
    </div>
  );
}

function Grouping1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GROUPING">
      <Row1 />
    </div>
  );
}

function WordContainer9() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[12px] text-center text-ellipsis whitespace-nowrap">
            ENGLISH
            <br aria-hidden="true" />
            BREAKFAST
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer10() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">COKE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer11() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[11px] text-center text-ellipsis whitespace-nowrap">CHAMOMILE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer12() {
  return (
    <div className="bg-[#f6d6e5] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">RED BULL</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e583b1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Row 1">
      <WordContainer9 />
      <WordContainer10 />
      <WordContainer11 />
      <WordContainer12 />
    </div>
  );
}

function Grouping2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GROUPING">
      <Row2 />
    </div>
  );
}

function WordContainer13() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">LITRE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#87d1dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer14() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">COLOUR</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#87d1dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer15() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">GREY</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#87d1dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function WordContainer16() {
  return (
    <div className="bg-[#d7f0f3] flex-[1_0_0] h-[66px] min-h-px min-w-px relative rounded-[8px]" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] max-h-[22px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[13px] text-center text-ellipsis whitespace-nowrap">RENOUNCE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#87d1dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Row 1">
      <WordContainer13 />
      <WordContainer14 />
      <WordContainer15 />
      <WordContainer16 />
    </div>
  );
}

function Grouping3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GROUPING">
      <Row3 />
    </div>
  );
}

function WordContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 max-w-[390px] px-[16px] py-[12px] top-[76px] w-[390px]" data-name="Word Container">
      <Grouping />
      <Grouping1 />
      <Grouping2 />
      <Grouping3 />
    </div>
  );
}

function Tagline() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 pt-[12px] px-[8px] top-[44px] w-[390px]" data-name="TAGLINE">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">Pick the imposter from each coloured row</p>
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
            <p className="leading-[20px]">Shuffle</p>
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
            <p className="leading-[20px]">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PuzzleButton2() {
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
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 max-w-[500px] pt-[8px] px-[12px] top-[531px] w-[390px]" data-name="Buttons Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-40 pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-40 pb-[2px] relative" data-name="Puzzle Button">
        <PuzzleButton2 />
      </div>
    </div>
  );
}

export default function Relink() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="Relink">
      <Header />
      <Frame />
      <Mistakes />
      <WordContainer />
      <Tagline />
      <ButtonsContainer />
    </div>
  );
}