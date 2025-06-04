import PageHeader from "../PageHeader"
import { useStepContext } from "../../hooks/useContext"
import NavButtons from "../NavButtons"

const PostcodeStep = () => {
  const { goToNextStep } = useStepContext()

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Enter Your Postcode" subtitle="We'll find available skip options in your area" />

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          This is a placeholder for the Postcode step.
        </p>

        <NavButtons showLeftBtn={false} handleContinue={goToNextStep} />
      </div>
    </div>
  )
}

export default PostcodeStep
