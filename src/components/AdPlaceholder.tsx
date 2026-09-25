export default function AdPlaceholder({
  slot = "Responsive Banner",
  className = "",
}: {
  slot?: string;
  className?: string;
}) {
  // Keep development ad zones out of the public experience until an ad network is configured.
  if (import.meta.env.VITE_SHOW_AD_PLACEHOLDERS !== "true") return null;

  return (
    <div className={`bg-[#ebe3d5]/40 border border-dashed border-[#c8b99f] rounded-xl p-4 text-center my-8 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-[#171611]/40 font-mono block mb-1">Advertisement</span>
      <div className="h-20 sm:h-24 flex items-center justify-center text-xs text-[#171611]/50 font-sans italic">
        Ad placement — {slot}
      </div>
    </div>
  );
}
