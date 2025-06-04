const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wavy pattern for light mode only */}
      <div className="absolute top-0 right-0 w-full h-64 opacity-20 dark:hidden">
        <svg viewBox="0 0 1000 250" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,202.7C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="url(#paint0_linear)"
            fillOpacity="1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4ade80" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="dark:stroke-[0.5]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Waste Management Unicode Icons */}
      <div className="absolute inset-0 opacity-50 flex items-center justify-center">
        {/* Recycle symbol */}
        <div className="absolute top-20 -left-2 md:left-0 lg:left-20 text-green-500 text-6xl transform rotate-12 opacity-60 delay-1000">
          &#9851;
        </div>

        {/* Litter in bin symbol */}
        <div className="absolute bottom-32 -right-4 md:-right-5 lg:right-20 text-blue-500 text-6xl transform -rotate-6 opacity-60 delay-2000">
          &#128686;
        </div>

        {/* Globe/Earth */}
        <div className="absolute bottom-48 left-8 md:left-12 lg:left-28 text-blue-400 text-5xl transform -rotate-8 opacity-55 delay-4000">
          &#127757;
        </div>

        {/* Truck/Garbage truck */}
        <div className="absolute bottom-20 right-24 md:right-32 lg:right-48 text-orange-500 text-4xl transform -rotate-4 opacity-50 delay-2500">
          &#128667;
        </div>

        {/* Leaf/Nature */}
        <div className="absolute top-32 right-40 md:right-48 lg:right-64 text-green-400 text-5xl transform rotate-8 opacity-40 delay-3500">
          &#127807;
        </div>
      </div>

      {/*  accent elements */}
      <div className="hidden md:block absolute left-[5%] top-[35%] w-24 h-24 rounded-full bg-emerald-500/5 blur-xl" />
      <div className="hidden md:block absolute right-[6%] bottom-[40%] w-32 h-32 rounded-full bg-blue-500/5 blur-xl" />
    </div>
  )
}

export default BackgroundPattern