;

import { FiX, FiMapPin, FiCalendar, FiTruck } from "react-icons/fi";
import { useStepContext } from "../hooks/useContext";
import NavButtons from "./NavButtons";

const SelectionModal = ({ skip, onClose }) => {
  const { goToNextStep, goToPreviousStep } = useStepContext()

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleBack = () => {
    onClose()
    goToPreviousStep()
  }

  const handleContinue = () => {
    onClose()
    goToNextStep()
  }

  // Calculate total price with VAT
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)
  const vatAmount = (skip.price_before_vat * (skip.vat / 100)).toFixed(2)

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end"
      onClick={handleBackdropClick}
    >
      <div className="w-full lg:w-4/5 mx-auto bg-white dark:bg-slate-800 rounded-t-3xl shadow-2xl transform transition-all duration-300 animate-slide-up max-h-[90vh] flex flex-col overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Skip Selection Details
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
        </div>

        <div className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-500 flex-1 min-h-0">
          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {skip.size} Yard Skip
                </h4>
                {skip.postcode && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <FiMapPin className="w-3 h-3 text-slate-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{skip.postcode}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 text-lg mb-5">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  £{skip.price_before_vat}
                </span>
                <span className="text-slate-600 dark:text-slate-300">
                  {skip.hire_period_days} day hire
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Pricing Details */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-slate-800 dark:text-white text-sm uppercase tracking-wide">Pricing</h5>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Base Price:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">£{skip.price_before_vat}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">VAT ({skip.vat}%):</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">£{vatAmount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold border-t pt-2 border-slate-200 dark:border-slate-600">
                    <span className="text-slate-800 dark:text-white">Total Price:</span>
                    <span className="text-blue-600 dark:text-blue-400">£{totalPrice}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-slate-800 dark:text-white text-sm uppercase tracking-wide">Service Details</h5>
                  <div className="flex items-center gap-2 text-sm">
                    <FiCalendar className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600 dark:text-slate-300">Hire Period:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{skip.hire_period_days} days</span>
                  </div>
                  {skip.transport_cost !== null ? (
                    <div className="flex items-center gap-2 text-sm">
                      <FiTruck className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600 dark:text-slate-300">Transport:</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">£{skip.transport_cost}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm">
                      <FiTruck className="w-4 h-4 text-green-500" />
                      <span className="text-slate-600 dark:text-slate-300">Transport:</span>
                      <span className="font-medium text-green-600">Included</span>
                    </div>
                  )}
                  {skip.per_tonne_cost && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Per Tonne:</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">£{skip.per_tonne_cost}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Permissions & Restrictions */}
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white text-sm uppercase tracking-wide mb-3">Permissions & Restrictions</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Road Placement:</span>
                    <span
                      className={`font-medium ${skip.allowed_on_road ? "text-green-600" : "text-amber-600"
                        }`}
                    >
                      {skip.allowed_on_road ? "Allowed" : "Not Allowed"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Heavy Waste:</span>
                    <span
                      className={`font-medium ${skip.allows_heavy_waste ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      {skip.allows_heavy_waste ? "Suitable" : "Not Suitable"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Status:</span>
                    <span
                      className={`font-medium ${skip.forbidden ? "text-red-600" : "text-green-600"
                        }`}
                    >
                      {skip.forbidden ? "Restricted" : "Available"}
                    </span>
                  </div>
                  {skip.area && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Area:</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{skip.area}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Service Information */}
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <p>Service ID: #{skip.id} • Last updated: {new Date(skip.updated_at).toLocaleDateString()}</p>
              </div>
            </div>

            <NavButtons handleBack={handleBack} handleContinue={handleContinue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;