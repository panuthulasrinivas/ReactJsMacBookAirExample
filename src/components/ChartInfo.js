import React from "react";

export default function ChartInfo() {
  return (
    <div className="mx-5 mt-5">
      <div className="flex gap-5">
        <span className="text-[#29B712] border-b-2 border-green-500 text-xl font-semibold px-2">
          LEGENDS
        </span>
        <span className="text-xl font-semibold">
          HEART RATE VARIABILITY CHART
        </span>
      </div>
      <div className="flex justify-between gap-3 mt-6 text-gray-600">
        <div className="w-1/3 flex flex-col gap-2">
          <div className="w-full">PVC - Premature Ventricular Contractions</div>
          <div className="w-full">PAC - Premature Atrial Contractions</div>
          <div className="w-full">
            Second Degree - Second Degree Type-1/Type-2
          </div>
          <div className="w-full">NB - Noise on Beat</div>
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <div className="w-full">Third Degree - Third Degree AV Block</div>
          <div className="w-full">P - P Wave</div>
          <div className="w-full">A! - Noise</div>
          <div className="w-full">HR - Heart Rate</div>
          <div className="w-full">E - Event Happening</div>
          <div className="w-full">HN - High Noise</div>
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <div>B - Beat</div>
          <div>BE - May/MayNot PVC</div>
          <div>PE - Definitely PVC</div>
          <div>BL - Beat Looking PVC’s</div>
          <div>L - Baseline Change</div>
          <div>R - Morph Change Due to Baseline</div>
        </div>
      </div>
    </div>
  );
}
