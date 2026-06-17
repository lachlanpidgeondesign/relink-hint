import svgPaths from "./svg-5l2cbun38g";

function ConnectionsIcon() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Connections - Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_9_1998)" id="Connections - Icon">
          <path d={svgPaths.p114c7500} fill="var(--fill-0, #D9D9D9)" id="Vector" />
          <g id="Mask group">
            <mask height="62" id="mask0_9_1998" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="64" x="0" y="0">
              <g id="Group">
                <path d={svgPaths.p2b8bc180} fill="var(--fill-0, white)" id="Vector_2" />
                <path d={svgPaths.p114c7500} fill="var(--fill-0, black)" id="Vector_3" />
              </g>
            </mask>
            <g mask="url(#mask0_9_1998)">
              <path d={svgPaths.p2ffaa800} fill="var(--fill-0, #926725)" id="Vector_4" />
            </g>
          </g>
          <path d={svgPaths.pd8b1900} fill="var(--fill-0, #926725)" id="Vector_5" />
          <g id="Mask group_2">
            <mask height="62" id="mask1_9_1998" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="64" x="0" y="2">
              <g id="Group_2">
                <path d={svgPaths.p47ab600} fill="var(--fill-0, white)" id="Vector_6" />
                <path d={svgPaths.pd8b1900} fill="var(--fill-0, black)" id="Vector_7" />
              </g>
            </mask>
            <g mask="url(#mask1_9_1998)">
              <path d={svgPaths.p2f5cb180} fill="var(--fill-0, #926725)" id="Vector_8" />
            </g>
          </g>
          <path d={svgPaths.p11effb80} fill="var(--fill-0, #FEF7EC)" id="Vector_9" />
          <path d={svgPaths.p11954640} fill="var(--fill-0, #FEF7EC)" id="Vector_10" />
          <path d={svgPaths.p1b7a3880} fill="var(--fill-0, #FEF7EC)" id="Vector_11" />
          <path d={svgPaths.p184a5940} fill="var(--fill-0, #F8CD8B)" id="Vector_12" />
          <path d={svgPaths.p16626da0} fill="var(--fill-0, #926725)" id="Vector_13" />
          <path d={svgPaths.p2a5f9100} fill="var(--fill-0, #F8CD8B)" id="Vector_14" />
          <path d={svgPaths.p1b7c0500} fill="var(--fill-0, #926725)" id="Vector_15" />
          <path d={svgPaths.p1f1e7000} fill="var(--fill-0, #F8CD8B)" id="Vector_16" />
          <path d={svgPaths.p7b0cd80} fill="var(--fill-0, #926725)" id="Vector_17" />
          <path d={svgPaths.p19211880} fill="var(--fill-0, #F3AC3D)" id="Vector_18" />
          <path d={svgPaths.p3a0cc600} fill="var(--fill-0, #926725)" id="Vector_19" />
        </g>
        <defs>
          <clipPath id="clip0_9_1998">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fdeed8] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[128px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-2 border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[99px] shadow-[0px_3px_0px_0px_#f8cd8b]" />
      <ConnectionsIcon />
    </div>
  );
}

function PuzzleInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Puzzle Info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#333] text-[16px] text-center">Word Links</p>
      <div className="h-[16px] relative shrink-0 w-0">
        <div className="absolute inset-[-3.13%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
            <path d="M0.5 0.5V16.5" id="Vector 112" stroke="var(--stroke-0, #666666)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#333] text-[16px] text-center">12 Feb 2026</p>
    </div>
  );
}

function ResultsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Results Container">
      <PuzzleInfo />
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] relative shrink-0 text-[#191919] text-[24px] text-center">Congratulations!</p>
    </div>
  );
}

function Frame() {
  return <div className="bg-[#9aa3ff] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame1() {
  return <div className="bg-[#9aa3ff] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame2() {
  return <div className="bg-[#9aa3ff] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame3() {
  return <div className="bg-[#9aa3ff] rounded-[4px] shrink-0 size-[24px]" />;
}

function Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#66e0c4] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame5() {
  return <div className="bg-[#66e0c4] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame6() {
  return <div className="bg-[#66e0c4] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame7() {
  return <div className="bg-[#66e0c4] rounded-[4px] shrink-0 size-[24px]" />;
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return <div className="bg-[#f8cd8b] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame9() {
  return <div className="bg-[#f8cd8b] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame10() {
  return <div className="bg-[#f8cd8b] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame11() {
  return <div className="bg-[#f8cd8b] rounded-[4px] shrink-0 size-[24px]" />;
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#87d1dc] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame13() {
  return <div className="bg-[#87d1dc] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame14() {
  return <div className="bg-[#87d1dc] rounded-[4px] shrink-0 size-[24px]" />;
}

function Frame15() {
  return <div className="bg-[#87d1dc] rounded-[4px] shrink-0 size-[24px]" />;
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function IcoTickCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ico-tick-circle" opacity="0">
          <g clipPath="url(#clip0_9_1992)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #9AA3FF)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_1992">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoTickCircle1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ico-tick-circle" opacity="0">
          <g clipPath="url(#clip0_9_2031)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #66E0C4)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_2031">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoTickCircle2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ico-tick-circle" opacity="0">
          <g clipPath="url(#clip0_9_2023)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #F8CD8B)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_2023">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoTickCircle3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ico-tick-circle" opacity="0">
          <g clipPath="url(#clip0_9_1995)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #87D1DC)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_1995">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <IcoTickCircle />
      <IcoTickCircle1 />
      <IcoTickCircle2 />
      <IcoTickCircle3 />
    </div>
  );
}

function IcoTickCircle4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-tick-circle">
          <g clipPath="url(#clip0_9_1989)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #9AA3FF)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_1989">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoTickCircle5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-tick-circle">
          <g clipPath="url(#clip0_9_1986)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #66E0C4)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_1986">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoTickCircle6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-tick-circle">
          <g clipPath="url(#clip0_9_2028)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p1bbe9180} fill="var(--fill-0, #F8CD8B)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_2028">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcoXmarkCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-xmark-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-xmark-circle">
          <g clipPath="url(#clip0_9_2871)">
            <rect fill="var(--fill-0, white)" height="24" rx="12" width="24" />
            <path d={svgPaths.p639ea00} fill="var(--fill-0, #87D1DC)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_2871">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Row">
      <IcoTickCircle4 />
      <IcoTickCircle5 />
      <IcoTickCircle6 />
      <IcoXmarkCircle />
    </div>
  );
}

function Results() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col gap-[4px] items-start p-[24px] relative rounded-[8px] shrink-0" data-name="Results">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_#f8cd8b]" />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  );
}

function TextIconContainer() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="Text + Icon Container">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_0px_0px_#f8cd8b]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Mistakes: 0</p>
      </div>
    </div>
  );
}

function TextIconContainer1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="Text + Icon Container">
      <div aria-hidden="true" className="absolute border border-[#f8cd8b] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_0px_0px_#f8cd8b]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Links: 4</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0">
      <TextIconContainer />
      <TextIconContainer1 />
    </div>
  );
}

function PlayButton() {
  return (
    <div className="bg-[#926725] relative rounded-[50px] shrink-0 w-full" data-name="Play Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Share your results</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayButton1() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[50px] shrink-0 w-full" data-name="Play Button">
      <div aria-hidden="true" className="absolute border-2 border-[#fdeed8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Reset puzzle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[358px] relative shrink-0 w-full" data-name="Buttons Container">
      <PlayButton />
      <PlayButton1 />
    </div>
  );
}

function Close() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.96px]" data-name="Close">
      <div className="absolute inset-[16.67%]" data-name="Path 19">
        <div className="absolute inset-[-3.47%_-3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7156 17.1111">
            <path d="M1 1L16.7156 16.1111" id="Path 19" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%]" data-name="Path 22">
        <div className="absolute inset-[-3.47%_-3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7156 17.1111">
            <path d="M16.7156 1L1 16.1111" id="Path 22" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonsContainer1() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px] w-[24px]" data-name="Buttons Container">
      <Close />
    </div>
  );
}

export default function EndGame() {
  return (
    <div className="bg-[#fef7ec] content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[24px] relative size-full" data-name="End Game">
      <Icon />
      <ResultsContainer />
      <Results />
      <Frame16 />
      <ButtonsContainer />
      <ButtonsContainer1 />
    </div>
  );
}