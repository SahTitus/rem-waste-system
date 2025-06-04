const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">{title}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  )
}

export default PageHeader
