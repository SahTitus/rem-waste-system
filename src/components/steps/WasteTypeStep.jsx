import PageHeader from "../PageHeader"
import { useStepContext } from "../../hooks/useContext"
import NavButtons from "../NavButtons"

const WasteTypeStep = () => {
  const { goToNextStep, goToPreviousStep } = useStepContext()

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Select Waste Type" subtitle="Tell us what type of waste you need to dispose of" />

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          This is a placeholder for the Waste Type step.
        </p>

        <NavButtons handleBack={goToPreviousStep} handleContinue={goToNextStep} />
      </div>
    </div>
  )
}

export default WasteTypeStep