;

import React, { useEffect, useState } from "react";
import { FiAlertTriangle, FiCheck, FiX, FiClock } from "react-icons/fi";
import ImageWithFallback from "./ImageWithFallback";
import { getSkipImage } from "../utils/skipImages";

const SkipCard = ({ skip, isSelected, onSelect, animationDelay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isDisabled = !skip.allows_heavy_waste;

  // Reveal card with delay based on animationDelay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  const handleClick = () => {
    if (!isDisabled) {
      onSelect(skip);
    }
  };

  return (
    <div
      className={`transform transition-all duration-300 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div
        onClick={handleClick}
        className={`relative transition-all duration-150 group${isSelected ? "scale-[1.005] z-10" : isDisabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
      >
        <div
          className={`relative overflow-hidden bg-white dark:bg-slate-800 rounded transition-all duration-200 ease-out ${isSelected ? "ring-2 ring-violet-500 shadow" : isDisabled ? "border border-red-200 dark:border-red-800" : "border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow"} `}
        >
          {/* Image Section */}
          <div className="relative h-48 bg-slate-200 dark:bg-slate-700">
            <ImageWithFallback
              src={getSkipImage(skip.size) || "/recycle-symbol.png"}
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
            />

            {/* Status badges */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              {isSelected && (
                <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center shadow-sm">
                  <FiCheck className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Road restriction badge */}
              {!skip.allowed_on_road && (
                <div className="inline-flex items-center gap-1.5 bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm">
                  <FiAlertTriangle className="w-3 h-3" />
                  Road Restricted
                </div>
              )}
            </div>

            {/* Heavy waste restriction */}
            {isDisabled && (
              <div className="absolute bottom-0 top-0 left-0 right-0 m-auto h-6 w-fit flex items-center gap-1.5 bg-red-100 dark:bg-red-900/90 text-red-700 dark:text-red-200 px-3 py-1 rounded-md text-xs font-bold border border-red-200 dark:border-red-600 opacity-100 z-50 shadow-sm">
                <FiAlertTriangle className="w-3 h-3" />
                Not Suitable for Heavy Waste
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="px-4 py-6">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex-1">
                <h2 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {skip.size} Yard Skip
                </h2>
                <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-md">
                  <FiClock className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skip.hire_period_days} days
                  </span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  £{skip.price_before_vat}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  excl. VAT
                </span>
              </div>
              <div className="w-12 h-0.5 bg-violet-600 rounded-full"></div>
            </div>

            {/* Action Button */}
            <button
              className={`w-full py-3 px-4 rounded font-semibold transition-colors duration-150 text-sm ${isSelected ? "bg-violet-600 text-white" : isDisabled ? "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed" : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-violet-600 dark:hover:bg-violet-600 dark:hover:text-white cursor-pointer"}`}
              disabled={isDisabled}
              aria-label="Select skip"
            >
              <span className="flex items-center justify-center gap-2">
                {isSelected ? (
                  <>
                    <FiCheck className="w-4 h-4" />
                    Selected
                  </>
                ) : isDisabled ? (
                  <>
                    <FiX className="w-4 h-4" />
                    Not Available
                  </>
                ) : (
                  "Select This Skip"
                )}
              </span>
            </button>
          </div>

          {/* Disabled Overlay */}
          {isDisabled && (
            <div className="absolute inset-0 bg-black/70 dark:bg-black/60 rounded pointer-events-none"></div>
          )}

          {/* Selection Accent */}
          {isSelected && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-violet-600 rounded-t-2xl"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
