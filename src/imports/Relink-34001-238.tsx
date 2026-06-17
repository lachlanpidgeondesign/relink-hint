import svgPaths from "./svg-dfxf0rc6rv";

function RelinkIcon() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="Relink Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="Relink Icon">
          <path d={svgPaths.p36629380} fill="var(--fill-0, #343D99)" id="Vector (Stroke)" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p34520700} fill="var(--fill-0, #343D99)" id="Vector (Stroke)_2" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p1bf00d00} fill="var(--fill-0, #EEF0FF)" id="Vector (Stroke)_3" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.p21678e30} fill="var(--fill-0, #5665FF)" id="Vector (Stroke)_4" stroke="var(--stroke-0, #343D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="Text Container">
      <p className="font-['Literata:ExtraBold',sans-serif] font-extrabold leading-[41px] relative shrink-0 text-[#343d99] text-[40px]">Relink</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#333] text-[15px]">Find the imposters then relink them!</p>
    </div>
  );
}

function PuzzleStartContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-1/2 w-[278px]" data-name="Puzzle Start Container">
      <RelinkIcon />
      <TextContainer />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center whitespace-nowrap">27 February 2026</p>
      <div className="bg-[#191919] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[50px] shrink-0 w-[129px]" data-name="System Button">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Start game</p>
        </div>
      </div>
    </div>
  );
}

export default function Relink() {
  return (
    <div className="bg-[#9aa3ff] relative size-full" data-name="Relink">
      <PuzzleStartContainer />
    </div>
  );
}