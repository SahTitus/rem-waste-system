import { useContext } from "react";
import { StepContext, ThemeContext } from "../contexts/contextValues";

// Custom hook to access step context safely
export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a StepProvider");
  }
  return context;
};

// Custom hook to access theme context safely
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
