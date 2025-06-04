import PageHeader from "../PageHeader"
import { useStepContext } from "../../hooks/useContext"
import NavButtons from "../NavButtons"

const PaymentStep = () => {
  const { goToPreviousStep } = useStepContext()

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Payment" subtitle="Complete your order with a secure payment" />

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          This is a placeholder for the Payment step.
        </p>

        <NavButtons showRightBtn={false} handleBack={goToPreviousStep} />
      </div>
    </div>
  )
}

export default PaymentStep
