import { useState, useEffect } from "react"

const SkipCardSkeleton = ({ delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Reveal card with delay based on animationDelay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={` transform transition-all duration-700 ease-out${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}   `}
    >
      <div className="bg-white dark:bg-slate-800 rounded shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="animate-pulse">
          <div className="bg-slate-200 dark:bg-slate-700 h-48 w-full"></div>

          <div className="p-6">
            <div className="bg-slate-200 dark:bg-slate-700 h-6 w-32 rounded mb-2"></div>
            <div className="bg-slate-200 dark:bg-slate-700 h-4 w-40 rounded mb-4"></div>
            <div className="bg-slate-200 dark:bg-slate-700 h-8 w-20 rounded mb-6"></div>
            <div className="bg-slate-200 dark:bg-slate-700 h-12 w-full rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkipCardSkeleton
