import { useState } from "react";
import { Share2, Check, Bookmark } from "lucide-react";

export default function PinterestButton({
  imageUrl,
  title,
  pageUrl,
}: {
  imageUrl: string;
  title: string;
  pageUrl?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handlePinterest = (e: React.MouseEvent) => {
    e.stopPropagation();
    const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      pageUrl || window.location.href
    )}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(title)}`;
    window.open(pinUrl, "_blank", "width=750,height=600");
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(pageUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePinterest}
        className="px-3 py-1.5 rounded-full bg-[#e60023] text-white text-xs font-semibold hover:bg-[#ad001a] transition-colors shadow-md flex items-center gap-1.5"
        title="Save to Pinterest"
      >
        <Bookmark size={13} />
        <span>Save to Pinterest</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="p-1.5 rounded-full bg-[#1c1a15]/70 text-[#faf7f2] hover:bg-[#1c1a15] transition-colors shadow-md"
        title="Copy Link"
      >
        {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
      </button>
    </div>
  );
}
