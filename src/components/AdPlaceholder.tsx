export default function AdPlaceholder({
  slot = "Responsive Banner",
  className = "",
}: {
  slot?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#eee8dc]/40 border border-dashed border-[#c8bfae] rounded-xl p-4 text-center my-8 ${className}`}
    >
      <span className="text-[10px] uppercase tracking-widest text-[#1c1a15]/40 font-mono block mb-1">
        Advertisement
      </span>
      <div className="h-20 sm:h-24 flex items-center justify-center text-xs text-[#1c1a15]/50 font-sans italic">
        [ AdSense Placement Zone — {slot} ]
      </div>
    </div>
  );
}
