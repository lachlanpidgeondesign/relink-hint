import { MoreHorizontal } from "lucide-react";

export function ConnectionsIcon() {
  return (
    <div className="relative size-[28px]">
      <svg className="block size-full" viewBox="0 0 28 28" fill="none">
        {/* Approximating the Connections icon based on the description/Figma look */}
        <circle cx="9" cy="9" r="8" fill="#D9D9D9" fillOpacity="0.5" />
        <circle cx="19" cy="9" r="8" fill="#D9D9D9" fillOpacity="0.5" />
        <circle cx="14" cy="19" r="8" fill="#D9D9D9" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

export function Header() {
  return (
    <div className="bg-[#fdeed8] flex h-[44px] items-center justify-between px-[12px] py-[8px] w-full border-b border-[#f8cd8b]">
       <div className="w-[116px] flex items-center">
         {/* Placeholder for left side content if any */}
       </div>
       <div className="shrink-0">
          {/* Logo / Icon */}
           <div className="relative size-[28px]">
              <svg className="block size-full" fill="none" viewBox="0 0 28 28">
                 {/* Recreating the iconic 3-ring logo approximately */}
                 <circle cx="10" cy="10" r="7" stroke="black" strokeWidth="1.5" className="fill-[#926725]" />
                 <circle cx="18" cy="10" r="7" stroke="black" strokeWidth="1.5" className="fill-[#F8CD8B]" />
                 <circle cx="14" cy="17" r="7" stroke="black" strokeWidth="1.5" className="fill-[#FEF7EC]" />
              </svg>
           </div>
       </div>
       <div className="w-[116px] flex items-center justify-end gap-4">
          <button className="bg-[#fcfcfc] flex h-[28px] items-center px-2 py-1 relative rounded-full border border-[#f8cd8b]">
            <MoreHorizontal size={16} color="#191919" />
          </button>
       </div>
    </div>
  );
}
