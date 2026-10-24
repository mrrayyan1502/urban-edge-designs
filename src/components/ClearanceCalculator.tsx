import { useState } from "react";
import { Ruler, CheckCircle2, AlertTriangle, XCircle, Copy, Check, Sparkles } from "lucide-react";

type RoomMode = "living" | "dining" | "kitchen" | "bedroom";

export default function ClearanceCalculator() {
  const [mode, setMode] = useState<RoomMode>("living");
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [copied, setCopied] = useState(false);

  // Living Room state (in cm)
  const [roomWidth, setRoomWidth] = useState(320);
  const [sofaDepth, setSofaDepth] = useState(90);
  const [coffeeTableDepth, setCoffeeTableDepth] = useState(55);
  const [tvConsoleDepth, setTvConsoleDepth] = useState(38);

  // Dining state (in cm)
  const [diningRoomWidth, setDiningRoomWidth] = useState(280);
  const [tableWidth, setTableWidth] = useState(90);

  // Kitchen state (in cm)
  const [kitchenWidth, setKitchenWidth] = useState(225);
  const [counterLeft, setCounterLeft] = useState(60);
  const [counterRight, setCounterRight] = useState(60);

  // Bedroom state (in cm)
  const [bedRoomWidth, setBedRoomWidth] = useState(290);
  const [bedWidth, setBedWidth] = useState(135); // standard double
  const [wardrobeDepth, setWardrobeDepth] = useState(60);

  // Conversion helpers
  const toDisplay = (valCm: number) => {
    if (unit === "in") return `${Math.round(valCm / 2.54)} in`;
    return `${Math.round(valCm)} cm`;
  };

  // Calculations
  // 1. Living room clearance
  const livingUsedSpace = sofaDepth + coffeeTableDepth + tvConsoleDepth;
  const livingRemainingWalkway = Math.max(0, roomWidth - livingUsedSpace);
  const sofaToTableClearance = 45; // standard target
  const livingWalkwayPass = livingRemainingWalkway >= 90 ? "optimal" : livingRemainingWalkway >= 75 ? "tight" : "congested";

  // 2. Dining room clearance
  const diningRemainingPerSide = Math.max(0, (diningRoomWidth - tableWidth) / 2);
  const diningPass = diningRemainingPerSide >= 90 ? "optimal" : diningRemainingPerSide >= 75 ? "tight" : "congested";

  // 3. Galley kitchen clearance
  const kitchenAisle = Math.max(0, kitchenWidth - (counterLeft + counterRight));
  const kitchenPass = kitchenAisle >= 105 ? "optimal" : kitchenAisle >= 90 ? "tight" : "congested";

  // 4. Bedroom clearance
  const bedroomRemaining = Math.max(0, bedRoomWidth - (bedWidth + wardrobeDepth));
  const bedroomPass = bedroomRemaining >= 75 ? "optimal" : bedroomRemaining >= 60 ? "tight" : "congested";

  const getStatusBadge = (status: "optimal" | "tight" | "congested") => {
    if (status === "optimal") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <CheckCircle2 size={13} /> Ergonomic Pass (Generous Clearance)
        </span>
      );
    }
    if (status === "tight") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
          <AlertTriangle size={13} /> Compact Fit (Minimum Threshold)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
        <XCircle size={13} /> Bottleneck Warning (Restricted Passage)
      </span>
    );
  };

  const handleCopyReport = () => {
    let report = "";
    if (mode === "living") {
      report = `Urban Edge Design - Living Room Clearance Audit:
Room Width: ${toDisplay(roomWidth)}
Sofa Depth: ${toDisplay(sofaDepth)} | Coffee Table: ${toDisplay(coffeeTableDepth)} | TV Console: ${toDisplay(tvConsoleDepth)}
Calculated Net Walkway: ${toDisplay(livingRemainingWalkway)} (${livingWalkwayPass.toUpperCase()})
Rule: Architectural standards require 90 cm (36 in) for comfortable pathways.
Verified via: https://urban-edge-designs.com/ideas/small-space-dimensions-guide#living-room-clearances`;
    } else if (mode === "dining") {
      report = `Urban Edge Design - Dining Clearance Audit:
Room Width: ${toDisplay(diningRoomWidth)} | Table Width: ${toDisplay(tableWidth)}
Perimeter Clearance per Side: ${toDisplay(diningRemainingPerSide)} (${diningPass.toUpperCase()})
Rule: 75 cm minimum to pull chairs out; 90-105 cm to walk behind seated diners.
Verified via: https://urban-edge-designs.com/ideas/small-space-dimensions-guide#dining-area-spacing`;
    } else if (mode === "kitchen") {
      report = `Urban Edge Design - Galley Kitchen Clearance Audit:
Total Width: ${toDisplay(kitchenWidth)} | Left Counter: ${toDisplay(counterLeft)} | Right Counter: ${toDisplay(counterRight)}
Net Central Work Aisle: ${toDisplay(kitchenAisle)} (${kitchenPass.toUpperCase()})
Rule: NKBA standard is 90 cm min for single cook; 105-120 cm for comfortable dual-cook movement.
Verified via: https://urban-edge-designs.com/ideas/small-space-dimensions-guide#galley-kitchen-work-aisles`;
    } else {
      report = `Urban Edge Design - Bedroom Walkway Clearance Audit:
Room Width: ${toDisplay(bedRoomWidth)} | Bed Width: ${toDisplay(bedWidth)} | Wardrobe: ${toDisplay(wardrobeDepth)}
Net Side Passage: ${toDisplay(bedroomRemaining)} (${bedroomPass.toUpperCase()})
Rule: 60 cm minimum walkway; 80 cm recommended for hinged wardrobe door swing.
Verified via: https://urban-edge-designs.com/ideas/small-space-dimensions-guide#bedroom-ergonomics`;
    }

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#ffffff] border-2 border-[#8b6f47]/30 rounded-2xl p-6 sm:p-8 shadow-sm my-8 text-[#171611]">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ebe3d5] pb-5">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#8b6f47] font-semibold flex items-center gap-1.5 mb-1">
            <Sparkles size={14} /> Interactive Spatial Planning Tool
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#171611]">
            Small Space Clearance &amp; Walkway Calculator
          </h3>
          <p className="text-xs text-[#171611]/70 font-light mt-1">
            Test your room dimensions against architectural benchmarks (NKBA, Neufert, UK Building Regs).
          </p>
        </div>

        {/* Unit Selector */}
        <div className="flex items-center gap-1 bg-[#f8f5ee] p-1 rounded-xl border border-[#ded4c2] self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setUnit("cm")}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
              unit === "cm" ? "bg-[#171611] text-[#f8f5ee]" : "text-[#171611]/70 hover:text-[#171611]"
            }`}
          >
            Metric (cm)
          </button>
          <button
            type="button"
            onClick={() => setUnit("in")}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
              unit === "in" ? "bg-[#171611] text-[#f8f5ee]" : "text-[#171611]/70 hover:text-[#171611]"
            }`}
          >
            Imperial (in)
          </button>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex flex-wrap gap-2 pt-5 pb-6">
        <button
          type="button"
          onClick={() => setMode("living")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === "living"
              ? "bg-[#171611] text-[#f8f5ee] shadow-sm"
              : "bg-[#f8f5ee] text-[#171611]/75 hover:bg-[#ebe3d5] border border-[#ded4c2]"
          }`}
        >
          Living Room Walkway
        </button>
        <button
          type="button"
          onClick={() => setMode("dining")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === "dining"
              ? "bg-[#171611] text-[#f8f5ee] shadow-sm"
              : "bg-[#f8f5ee] text-[#171611]/75 hover:bg-[#ebe3d5] border border-[#ded4c2]"
          }`}
        >
          Dining Perimeter
        </button>
        <button
          type="button"
          onClick={() => setMode("kitchen")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === "kitchen"
              ? "bg-[#171611] text-[#f8f5ee] shadow-sm"
              : "bg-[#f8f5ee] text-[#171611]/75 hover:bg-[#ebe3d5] border border-[#ded4c2]"
          }`}
        >
          Galley Kitchen Aisle
        </button>
        <button
          type="button"
          onClick={() => setMode("bedroom")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            mode === "bedroom"
              ? "bg-[#171611] text-[#f8f5ee] shadow-sm"
              : "bg-[#f8f5ee] text-[#171611]/75 hover:bg-[#ebe3d5] border border-[#ded4c2]"
          }`}
        >
          Bedroom &amp; Wardrobe
        </button>
      </div>

      {/* Inputs & Visual Results Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-start bg-[#fcfaf7] border border-[#ebe3d5] rounded-xl p-5 sm:p-6">
        {/* Left Column: Form Controls */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-[#171611] flex items-center gap-2">
            <Ruler size={16} className="text-[#8b6f47]" /> Input Measurements
          </h4>

          {mode === "living" && (
            <>
              <div>
                <label className="block text-xs font-medium text-[#171611]/80 mb-1">
                  Total Room Width: <span className="font-bold text-[#171611]">{toDisplay(roomWidth)}</span>
                </label>
                <input
                  type="range"
                  min="240"
                  max="500"
                  step="5"
                  value={roomWidth}
                  onChange={(e) => setRoomWidth(Number(e.target.value))}
                  className="w-full accent-[#8b6f47]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Sofa Depth
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(sofaDepth / 2.54) : sofaDepth}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setSofaDepth(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Coffee Table
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(coffeeTableDepth / 2.54) : coffeeTableDepth}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCoffeeTableDepth(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    TV Console
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(tvConsoleDepth / 2.54) : tvConsoleDepth}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setTvConsoleDepth(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
              </div>
            </>
          )}

          {mode === "dining" && (
            <>
              <div>
                <label className="block text-xs font-medium text-[#171611]/80 mb-1">
                  Dining Room Width: <span className="font-bold text-[#171611]">{toDisplay(diningRoomWidth)}</span>
                </label>
                <input
                  type="range"
                  min="200"
                  max="450"
                  step="5"
                  value={diningRoomWidth}
                  onChange={(e) => setDiningRoomWidth(Number(e.target.value))}
                  className="w-full accent-[#8b6f47]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#171611]/80 mb-1">
                  Dining Table Width: <span className="font-bold text-[#171611]">{toDisplay(tableWidth)}</span>
                </label>
                <input
                  type="range"
                  min="60"
                  max="140"
                  step="5"
                  value={tableWidth}
                  onChange={(e) => setTableWidth(Number(e.target.value))}
                  className="w-full accent-[#8b6f47]"
                />
              </div>
            </>
          )}

          {mode === "kitchen" && (
            <>
              <div>
                <label className="block text-xs font-medium text-[#171611]/80 mb-1">
                  Total Kitchen Width: <span className="font-bold text-[#171611]">{toDisplay(kitchenWidth)}</span>
                </label>
                <input
                  type="range"
                  min="160"
                  max="350"
                  step="5"
                  value={kitchenWidth}
                  onChange={(e) => setKitchenWidth(Number(e.target.value))}
                  className="w-full accent-[#8b6f47]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Left Counter Depth
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(counterLeft / 2.54) : counterLeft}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCounterLeft(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Right Counter Depth
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(counterRight / 2.54) : counterRight}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCounterRight(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
              </div>
            </>
          )}

          {mode === "bedroom" && (
            <>
              <div>
                <label className="block text-xs font-medium text-[#171611]/80 mb-1">
                  Bedroom Width: <span className="font-bold text-[#171611]">{toDisplay(bedRoomWidth)}</span>
                </label>
                <input
                  type="range"
                  min="220"
                  max="450"
                  step="5"
                  value={bedRoomWidth}
                  onChange={(e) => setBedRoomWidth(Number(e.target.value))}
                  className="w-full accent-[#8b6f47]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Bed Size
                  </label>
                  <select
                    value={bedWidth}
                    onChange={(e) => setBedWidth(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  >
                    <option value={90}>Single (90 cm / 36")</option>
                    <option value={120}>Small Double (120 cm / 48")</option>
                    <option value={135}>Standard Double (135 cm / 53")</option>
                    <option value={150}>King (150 cm / 60")</option>
                    <option value={180}>Super King (180 cm / 72")</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#171611]/70 mb-1">
                    Wardrobe Depth
                  </label>
                  <input
                    type="number"
                    value={unit === "in" ? Math.round(wardrobeDepth / 2.54) : wardrobeDepth}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setWardrobeDepth(unit === "in" ? Math.round(val * 2.54) : val);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#ded4c2] rounded-lg"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column: Live Results */}
        <div className="bg-white border border-[#ded4c2] rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#8b6f47] uppercase tracking-wider">
              Calculated Ergonomics
            </span>
            {mode === "living" && getStatusBadge(livingWalkwayPass)}
            {mode === "dining" && getStatusBadge(diningPass)}
            {mode === "kitchen" && getStatusBadge(kitchenPass)}
            {mode === "bedroom" && getStatusBadge(bedroomPass)}
          </div>

          {/* Key Metric Display */}
          <div className="bg-[#f8f5ee] rounded-xl p-4 text-center border border-[#ebe3d5]">
            <p className="text-xs text-[#171611]/60 uppercase tracking-wider mb-1">
              {mode === "living" && "Net Primary Walkway Clearance"}
              {mode === "dining" && "Clearance Per Side to Wall"}
              {mode === "kitchen" && "Central Work Aisle Width"}
              {mode === "bedroom" && "Net Walkway Passage to Bed"}
            </p>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#171611]">
              {mode === "living" && toDisplay(livingRemainingWalkway)}
              {mode === "dining" && toDisplay(diningRemainingPerSide)}
              {mode === "kitchen" && toDisplay(kitchenAisle)}
              {mode === "bedroom" && toDisplay(bedroomRemaining)}
            </p>
          </div>

          {/* Progress Bar Visualizer */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-[#171611]/60">
              <span>Tight (60cm)</span>
              <span>Minimum (75cm)</span>
              <span>Optimal (90cm+)</span>
            </div>
            <div className="h-3 w-full bg-[#ebe3d5] rounded-full overflow-hidden flex">
              {mode === "living" && (
                <div
                  className={`h-full transition-all duration-300 ${
                    livingWalkwayPass === "optimal"
                      ? "bg-emerald-500"
                      : livingWalkwayPass === "tight"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${Math.min(100, (livingRemainingWalkway / 120) * 100)}%` }}
                />
              )}
              {mode === "dining" && (
                <div
                  className={`h-full transition-all duration-300 ${
                    diningPass === "optimal"
                      ? "bg-emerald-500"
                      : diningPass === "tight"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${Math.min(100, (diningRemainingPerSide / 120) * 100)}%` }}
                />
              )}
              {mode === "kitchen" && (
                <div
                  className={`h-full transition-all duration-300 ${
                    kitchenPass === "optimal"
                      ? "bg-emerald-500"
                      : kitchenPass === "tight"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${Math.min(100, (kitchenAisle / 130) * 100)}%` }}
                />
              )}
              {mode === "bedroom" && (
                <div
                  className={`h-full transition-all duration-300 ${
                    bedroomPass === "optimal"
                      ? "bg-emerald-500"
                      : bedroomPass === "tight"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${Math.min(100, (bedroomRemaining / 100) * 100)}%` }}
                />
              )}
            </div>
          </div>

          {/* Practical Rule Advice */}
          <div className="text-xs text-[#171611]/75 leading-relaxed bg-[#f8f5ee]/70 p-3 rounded-lg border border-[#ebe3d5]">
            {mode === "living" && (
              <p>
                <strong>The 90 cm Rule:</strong> Main passages require 90 cm (36 in) to allow adults to pass carrying laundry or groceries without turning sideways. Secondary paths can drop to 75 cm.
              </p>
            )}
            {mode === "dining" && (
              <p>
                <strong>Push-Back vs Walk-Behind:</strong> 75 cm is enough only to push a chair back to stand up. If anyone needs to walk behind a seated diner, you must maintain at least 90–105 cm.
              </p>
            )}
            {mode === "kitchen" && (
              <p>
                <strong>NKBA Kitchen Guideline 3:</strong> Single-cook work aisles require at least 90 cm (36 in). For multiple cooks or open oven doors without collision, 105–120 cm is required.
              </p>
            )}
            {mode === "bedroom" && (
              <p>
                <strong>Wardrobe Arc Clearance:</strong> Hinged wardrobe doors require 80–90 cm of clearance to open fully and allow you to stand in front of open drawers.
              </p>
            )}
          </div>

          {/* Action Button: Copy Report */}
          <button
            type="button"
            onClick={handleCopyReport}
            className="w-full py-2.5 px-4 rounded-xl bg-[#171611] text-[#f8f5ee] text-xs font-semibold hover:bg-[#8b6f47] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#c8ad7f]" />
                Copied Layout Report to Clipboard!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy Shareable Clearance Report
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
