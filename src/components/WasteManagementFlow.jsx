import { STEPS } from "../constants"
import { useStepContext } from "../hooks/useContext"
import BackgroundPattern from "./BackgroundPattern"
import StepNavigation from "./StepNavigation"
import ChooseDateStep from "./steps/ChooseDateStep"
import PaymentStep from "./steps/PaymentStep"
import PermitCheckStep from "./steps/PermitCheckStep"
import PostcodeStep from "./steps/PostcodeStep"
import SelectSkipStep from "./steps/SelectSkipStep"
import WasteTypeStep from "./steps/WasteTypeStep"
import ThemeToggle from "./ThemeToggle"

const WasteManagementFlow = () => {
   const { currentStep, goToStep } = useStepContext()

   // Render component based on the current step
   const renderStep = () => {
      switch (currentStep) {
         case STEPS.POSTCODE:
            return <PostcodeStep />
         case STEPS.WASTE_TYPE:
            return <WasteTypeStep />
         case STEPS.SELECT_SKIP:
            return <SelectSkipStep />
         case STEPS.PERMIT_CHECK:
            return <PermitCheckStep />
         case STEPS.CHOOSE_DATE:
            return <ChooseDateStep />
         case STEPS.PAYMENT:
            return <PaymentStep />
         default:
            return <SelectSkipStep />
      }
   }

   return (
      <div className="relative min-h-screen">
         <BackgroundPattern />

         <div className="relative z-10">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
               <div className="flex justify-between items-center mb-8">
                  <div className="flex-1" />
                  <ThemeToggle />
               </div>

               <StepNavigation currentStep={currentStep} onStepChange={goToStep} />

               <div className="mt-8 xl:w-4/5 mx-auto">{renderStep()}</div>
            </div>
         </div>
      </div>
   )
}

export default WasteManagementFlow
