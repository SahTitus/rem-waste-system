import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "../hooks/useContext"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <FiSun
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
        />
        <FiMoon
          className={`absolute inset-0 w-6 h-6 text-slate-600 transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
        />
      </div>
    </button>
  )
}

export default ThemeToggle
