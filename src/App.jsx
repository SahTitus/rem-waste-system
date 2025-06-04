import WasteManagementFlow from "./components/WasteManagementFlow"
import { StepProvider } from "./contexts/StepContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import "./styles/globals.css"

function App() {
  return (
    <ThemeProvider>
      <StepProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
          <WasteManagementFlow />
        </div>
      </StepProvider>
    </ThemeProvider>
  )
}

export default App
