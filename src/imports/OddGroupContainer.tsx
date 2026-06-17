function WordContainer() {
  return (
    <div className="bg-[#333] h-[51.28px] relative rounded-[6.41px] shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[6.41px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.627px] max-h-[17.627328872680664px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis">MARK</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#333] border-[0.801px] border-solid inset-0 pointer-events-none rounded-[6.41px]" />
    </div>
  );
}

function WordContainer1() {
  return (
    <div className="bg-[#333] h-[51px] relative rounded-[6.41px] shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[6.41px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.627px] max-h-[17.627328872680664px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis">POINT</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#333] border-[0.801px] border-solid inset-0 pointer-events-none rounded-[6.41px]" />
    </div>
  );
}

function WordContainer2() {
  return (
    <div className="bg-[#333] h-[51px] relative rounded-[6.41px] shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[6.41px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.627px] max-h-[17.627328872680664px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis">LIST</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#333] border-[0.801px] border-solid inset-0 pointer-events-none rounded-[6.41px]" />
    </div>
  );
}

function WordContainer3() {
  return (
    <div className="bg-[#333] h-[51px] relative rounded-[6.41px] shrink-0 w-full" data-name="Word Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[6.41px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.627px] max-h-[17.627328872680664px] not-italic overflow-hidden relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-ellipsis">MATE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#333] border-[0.801px] border-solid inset-0 pointer-events-none rounded-[6.41px]" />
    </div>
  );
}

function OddGroup() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex flex-col h-[292px] items-start justify-between p-[8px] relative rounded-[8px] shrink-0 w-[81px]" data-name="Odd Group">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_#191919]" />
      <WordContainer />
      <WordContainer1 />
      <WordContainer2 />
      <WordContainer3 />
    </div>
  );
}

export default function OddGroupContainer() {
  return (
    <div className="content-stretch flex items-center py-[12px] relative size-full" data-name="Odd Group Container">
      <OddGroup />
    </div>
  );
}