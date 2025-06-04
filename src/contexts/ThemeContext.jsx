import { useState, useEffect } from "react"
import { ThemeContext } from "./contextValues"

// ThemeProvider manages light/dark mode state and provides toggle functionality
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  // Initialize theme from localStorage 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  // Apply or remove the "dark" class and persist theme preference
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])


  // Toggle between dark and light themes
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}