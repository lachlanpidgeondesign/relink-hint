import svgPaths from "./svg-6w9nru9he2";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Header Container">
      <Header />
    </div>
  );
}

function RelinkIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Relink Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Relink Icon">
          <path d={svgPaths.p30b85a00} fill="var(--fill-0, #343D99)" id="Vector (Stroke)" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p26166300} fill="var(--fill-0, #343D99)" id="Vector (Stroke)_2" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.pfb02900} fill="var(--fill-0, #EEF0FF)" id="Vector (Stroke)_3" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p11f35500} fill="var(--fill-0, #5665FF)" id="Vector (Stroke)_4" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <RelinkIcon />
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#343d99] text-[18px] whitespace-nowrap">Relink</p>
    </div>
  );
}

function PuzzleInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Puzzle Info">
      <Frame23 />
      <div className="h-[16px] relative shrink-0 w-0">
        <div className="absolute inset-[-3.13%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
            <path d="M0.5 0.5V16.5" id="Vector 112" stroke="var(--stroke-0, #666666)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#333] text-[16px] text-center whitespace-nowrap">10 Mar 2026</p>
    </div>
  );
}

function ResultsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Results Container">
      <PuzzleInfo />
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] relative shrink-0 text-[#191919] text-[24px] text-center whitespace-nowrap">Level Completed!</p>
    </div>
  );
}

function Results() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start p-[24px] relative rounded-[8px] shrink-0" data-name="Results">
      <div aria-hidden="true" className="absolute border border-[#5665ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_#5665ff]" />
      <div className="bg-[#d9d9d9] h-[86px] shrink-0 w-[91px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#333] text-[16px] text-center whitespace-nowrap">RESULTS</p>
      <Results />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p245c2480} id="Vector" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b9ecd80} id="Vector_2" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p30483c80} id="Vector_3" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4e4c80} id="Vector_4" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34f41a40} id="Vector_5" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function PlayButton() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[50px] shrink-0" data-name="Play Button">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Frame1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Share</p>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="bg-[#9aa3ff] relative rounded-[16px] shrink-0 w-full" data-name="Time">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative w-full">
          <Frame22 />
          <PlayButton />
        </div>
      </div>
    </div>
  );
}

function NextPuzzle() {
  return (
    <div className="content-stretch flex items-center justify-center py-[4px] relative shrink-0 w-full" data-name="Next Puzzle">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#333] text-[16px] text-center whitespace-nowrap">Next Puzzle In: 11:08:21</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Buttons Container">
      <Time />
      <NextPuzzle />
    </div>
  );
}

function EndGameResultsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="End Game Results Container">
      <ResultsContainer />
      <ButtonsContainer />
    </div>
  );
}

function EndGameResults() {
  return (
    <div className="relative shrink-0 w-full" data-name="End Game Results">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[16px] px-[16px] relative w-full">
          <EndGameResultsContainer />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0">
      <div className="h-[20px] relative shrink-0 w-[16.429px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4287 20">
          <path d={svgPaths.p3ec15b80} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Literata:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191919] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[34px]">3 day streak</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 1984078266">
          <rect fill="var(--fill-0, #343D99)" height="36" rx="18" width="36" />
          <path d={svgPaths.p65bdbf0} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">M</p>
      <Frame3 />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#343d99] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 1984078266">
          <rect fill="var(--fill-0, #343D99)" height="36" rx="18" width="36" />
          <path d={svgPaths.p65bdbf0} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">T</p>
      <Frame7 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#343d99] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 1984078266">
          <rect fill="var(--fill-0, #343D99)" height="36" rx="18" width="36" />
          <path d={svgPaths.p65bdbf0} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">W</p>
      <Frame9 />
    </div>
  );
}

function Divider2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#f5f5f5] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#f5f5f5] rounded-[113.83px] shrink-0 size-[36px]" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">T</p>
      <Frame12 />
    </div>
  );
}

function Divider3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#f5f5f5] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#f5f5f5] rounded-[113.83px] shrink-0 size-[36px]" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">F</p>
      <Frame15 />
    </div>
  );
}

function Divider4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#f5f5f5] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return <div className="bg-[#f5f5f5] rounded-[113.83px] shrink-0 size-[36px]" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">S</p>
      <Frame17 />
    </div>
  );
}

function Divider5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative" data-name="Divider">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[16px] relative size-full">
          <div className="bg-[#f5f5f5] h-[4px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="bg-[#f5f5f5] rounded-[113.83px] shrink-0 size-[36px]" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[9.198px] items-center mr-[-1px] relative shrink-0 w-[36.401px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.696px] not-italic relative shrink-0 text-[#191919] text-[14.947px] text-center whitespace-nowrap">S</p>
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center pr-px relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider />
      </div>
      <Frame5 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider1 />
      </div>
      <Frame8 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider2 />
      </div>
      <Frame10 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider3 />
      </div>
      <Frame13 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider4 />
      </div>
      <Frame16 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Divider5 />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame21 />
      <Frame6 />
    </div>
  );
}

function FeaturedGamesContainer() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[16px] shrink-0 w-full" data-name="Featured Games Container">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Frame11 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
                <path d="M0.5 0.5H310.5" id="Vector 121" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] text-[16px] text-center whitespace-nowrap">
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[21px]">{`Your longest streak: `}</span>
            <span className="leading-[21px]">7 days</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <FeaturedGamesContainer />
      </div>
    </div>
  );
}

export default function EndGame() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start pb-[24px] relative size-full" data-name="End Game">
      <HeaderContainer />
      <EndGameResults />
      <Frame14 />
    </div>
  );
}