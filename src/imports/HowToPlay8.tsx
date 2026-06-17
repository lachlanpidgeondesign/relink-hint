import svgPaths from "./svg-xid8zjn3g8";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[21px] ml-[34px] mt-[2px] not-italic relative row-1 text-[#191919] text-[16px] text-center whitespace-nowrap">EASIEST</p>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[21px] ml-[34px] mt-[99px] not-italic relative row-1 text-[#191919] text-[16px] text-center whitespace-nowrap">HARDEST</p>
      <div className="bg-[#fdeed8] border border-[#f8cd8b] border-solid col-1 ml-0 mt-0 rounded-[4px] row-1 size-[24px]" />
      <div className="bg-[#ccf5eb] border border-[#66e0c4] border-solid col-1 ml-0 mt-[32px] rounded-[4px] row-1 size-[24px]" />
      <div className="bg-[#f6d6e5] border border-[#e583b1] border-solid col-1 ml-0 mt-[64px] rounded-[4px] row-1 size-[24px]" />
      <div className="bg-[#dde0ff] border border-[#9aa3ff] border-solid col-1 ml-0 mt-[96px] rounded-[4px] row-1 size-[24px]" />
      <div className="col-1 h-[42px] ml-[64.5px] mt-[39.5px] relative row-1 w-0">
        <div className="absolute inset-[0_-3.68px_-1.19%_-3.68px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36396 42.5">
            <path d={svgPaths.p20a951c0} fill="var(--stroke-0, black)" id="Vector 120" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WordContainer() {
  return (
    <div className="max-w-[390px] relative shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[16px] py-[12px] relative w-full">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] min-w-full relative shrink-0 text-[#191919] text-[24px] text-center w-[min-content]">Tips</p>
      <div className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center w-[358px] whitespace-pre-wrap">
        <p className="mb-0">{`There is only one solution for each puzzle, so watch out for red herrings and traps! `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`The four groups are in order of difficulty, so the bottom one is usually hardest. `}</p>
      </div>
      <WordContainer />
    </div>
  );
}

export default function HowToPlay() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-center p-[16px] relative size-full" data-name="How to play - 8">
      <Container />
    </div>
  );
}