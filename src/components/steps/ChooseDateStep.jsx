import PageHeader from "../PageHeader"
import { useStepContext } from "../../hooks/useContext"
import NavButtons from "../NavButtons"

const ChooseDateStep = () => {
  const { goToNextStep, goToPreviousStep } = useStepContext()

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Choose Delivery Date" subtitle="Select when you'd like your skip to be delivered" />

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          This is a placeholder for the Choose Date step.
        </p>

        <NavButtons handleBack={goToPreviousStep} handleContinue={goToNextStep} />
      </div>
    </div>
  )
}

export default ChooseDateStep
