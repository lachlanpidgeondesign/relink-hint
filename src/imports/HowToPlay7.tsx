import svgPaths from "./svg-rzwhgedwxj";

function Label() {
  return (
    <div className="bg-[#e583b1] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">LETTER</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#87d1dc] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">E</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">CONTAIN THE</p>
      <Label />
      <Label1 />
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-[#191919] overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-xmark-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p23f4cbf0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f8cd8b] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">LETTER</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#66e0c4] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">L</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">START WITH THE</p>
      <Label2 />
      <Label3 />
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-[#191919] overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-xmark-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p23f4cbf0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-[#66e0c4] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">PLACES</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Label4 />
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-[#191919] overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-xmark-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p23f4cbf0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer2 />
    </div>
  );
}

function No() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="No">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[#66e0c4] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">GREEN</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-[#87d1dc] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">THINGS</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Label5 />
      <Label6 />
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-black overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-tick-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1b300280} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer3 />
    </div>
  );
}

function Label7() {
  return (
    <div className="bg-[#f8cd8b] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">MAMMALS</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Label7 />
    </div>
  );
}

function LinkContainer4() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-black overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-tick-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1b300280} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer4 />
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#e583b1] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#333] text-[13px] text-center text-ellipsis whitespace-nowrap">ANIMALS</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[13px] text-center text-ellipsis whitespace-nowrap">ENDS IN</p>
      <Label8 />
    </div>
  );
}

function LinkContainer5() {
  return (
    <div className="bg-[#333] relative rounded-[8px] shrink-0 w-full" data-name="Link Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[12px] relative w-full">
          <div className="bg-black overflow-clip relative rounded-[99px] shrink-0 size-[20px]" data-name="ico-tick-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1b300280} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <LinkContainer5 />
    </div>
  );
}

function Yes() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="YES">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="max-w-[358px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] p-[16px] relative w-full">
        <No />
        <Yes />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Literata:Bold',sans-serif] font-bold leading-[34px] min-w-full relative shrink-0 text-[#191919] text-[24px] text-center w-[min-content]">Tips</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#191919] text-[15px] text-center w-[358px] whitespace-pre-wrap">
        <p className="mb-0">A category will never be generic and have a level of specificity:</p>
        <p className="mb-0">&nbsp;</p>
        <p>Sometimes you may need to create a phrase or part of a phrase.</p>
      </div>
      <Frame />
    </div>
  );
}

export default function HowToPlay() {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-center p-[16px] relative size-full" data-name="How to play - 7">
      <Container />
    </div>
  );
}