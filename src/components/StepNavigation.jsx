import { useState, useEffect } from 'react';
import { FiMapPin, FiTrash2, FiTruck, FiShield, FiCalendar, FiCreditCard, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = [
  { id: 1, label: "Postcode", icon: FiMapPin },
  { id: 2, label: "Waste Type", icon: FiTrash2 },
  { id: 3, label: "Select Skip", icon: FiTruck },
  { id: 4, label: "Permit Check", icon: FiShield },
  { id: 5, label: "Choose Date", icon: FiCalendar },
  { id: 6, label: "Payment", icon: FiCreditCard },
];

const StepNavigation = ({ currentStep, onStepChange }) => {
  const [visibleSteps, setVisibleSteps] = useState([]);

  // Calculate visible steps for mobile view
  useEffect(() => {
    const calculateVisibleSteps = () => {
      const maxVisible = 3; // Show current + 1 previous + 1 next when possible
      const current = currentStep;

      let start = Math.max(1, current - 1);
      let end = Math.min(steps.length, start + maxVisible - 1);

      // Adjust if we're near the end
      if (end === steps.length && steps.length >= maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      const visible = [];
      for (let i = start; i <= end; i++) {
        visible.push(i);
      }

      setVisibleSteps(visible);
    };

    calculateVisibleSteps();
  }, [currentStep]);

  // Determine if previous steps can be navigated to for mobile
  const canNavigateToPrevious = () => {
    return visibleSteps[0] > 1;
  };

  // Determine if next steps can be navigated to for mobile
  const canNavigateToNext = () => {
    return visibleSteps[visibleSteps.length - 1] < steps.length;
  };

  // Shift visible steps one step backward for mobile carousel-like nav
  const navigatePrevious = () => {
    if (canNavigateToPrevious()) {
      const newStart = Math.max(1, visibleSteps[0] - 1);
      const newVisible = [];
      for (let i = newStart; i < newStart + 3 && i <= steps.length; i++) {
        newVisible.push(i);
      }
      setVisibleSteps(newVisible);
    }
  };

  // Shift visible steps one step forward for mobile carousel-like nav
  const navigateNext = () => {
    if (canNavigateToNext()) {
      const newStart = Math.min(steps.length - 2, visibleSteps[visibleSteps.length - 1] - 1);
      const newVisible = [];
      for (let i = newStart; i < newStart + 3 && i <= steps.length; i++) {
        newVisible.push(i);
      }
      setVisibleSteps(newVisible);
    }
  };

  return (
    <div className="mb-8 md:mb-12">
      {/* Mobile view */}
      <div className="block lg:hidden">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Step {currentStep} of {steps.length}
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {steps.find((step) => step.id === currentStep)?.label}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-4 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* step navigation */}
          <div className="flex items-center justify-center space-x-2">
            {/* Previous navigation button */}
            <button
              onClick={navigatePrevious}
              disabled={!canNavigateToPrevious()}
              className={` p-1 rounded-full transition-colors duration-200 ${canNavigateToPrevious() ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700' : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'} `}
              aria-label="Previous steps"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>

            {/* Visible steps */}
            <div className="flex items-center space-x-2">
              {visibleSteps.map((stepId, index) => {
                const step = steps.find(s => s.id === stepId);
                const Icon = step.icon;
                const isActive = stepId === currentStep;
                const isCompleted = stepId < currentStep;
                const isClickable = stepId < currentStep;

                return (
                  <div key={stepId} className="flex items-center space-x-2">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => isClickable && onStepChange(stepId)}
                        disabled={!isClickable}
                        className={` flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : isCompleted ? 'bg-green-600 text-white cursor-pointer hover:bg-green-700 shadow-lg shadow-green-500/25' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-600'}  `}
                        aria-label="Current step"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                      {isActive && (
                        <span className="text-xs mt-1 text-blue-600 dark:text-blue-400 font-medium">
                          {step.label}
                        </span>
                      )}
                    </div>

                    {/* Connecting line */}
                    {index < visibleSteps.length - 1 && (
                      <div className={`  w-4 h-0.5 transition-colors duration-300  ${stepId < currentStep ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next navigation button */}
            <button
              onClick={navigateNext}
              disabled={!canNavigateToNext()}
              className={`  p-1 rounded-full transition-colors duration-200  ${canNavigateToNext() ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700' : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'} `}
              aria-label="Next step"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="flex items-center space-x-2 xl:space-x-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            const isClickable = step.id < currentStep;

            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => isClickable && onStepChange(step.id)}
                  disabled={!isClickable}
                  className={`flex flex-col items-center transition-all duration-200 ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'} `}
                  aria-label="Current step"
                >
                  <div className={` w-10 h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25' : isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25' : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-2 border-slate-200 dark:border-slate-700'}  ${isClickable ? 'hover:shadow-xl hover:-translate-y-1' : ''}`}>
                    <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
                  </div>
                  <span className={`text-xs xl:text-sm font-medium transition-colors duration-300 text-center ${isActive ? 'text-blue-600 dark:text-blue-400' : isCompleted ? 'text-green-600 dark:text-green-400' : 'text-slate-500 dark:text-slate-400'}  `}>
                    {step.label}
                  </span>
                </button>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className={`w-4 xl:w-12 h-0.5 mx-1 xl:mx-3 transition-colors duration-300  ${step.id < currentStep ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepNavigation;