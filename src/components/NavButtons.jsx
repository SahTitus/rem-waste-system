const NavButtons = ({ handleBack, handleContinue, showLeftBtn = true, showRightBtn = true }) => {
   return (
      <div className="grid grid-cols-2 mx-auto md:flex items-end justify-between md:justify-end gap-3 md:gap-3 w-full md:w-fit mt-6 md:mt-0 flex-shrink-0">
         {showLeftBtn && (
            <button onClick={handleBack} className="flex justify-center items-center gap-2 px-10 md:px-14 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer w-full" aria-label="Go back">
               Back
            </button>
         )}
         {showRightBtn && (
            <button onClick={handleContinue} className="flex justify-center items-center gap-2 px-6 md:px-10 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 cursor-pointer w-full" aria-label="Go to next step">
               Continue
            </button>
         )}
      </div>
   )
}

export default NavButtons