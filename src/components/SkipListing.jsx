import SkipCard from "./SkipCard"
import SkipCardSkeleton from "./SkipCardSkeleton"
import LoadingSpinner from "./LoadingSpinner"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

const SkipListing = ({ skips, loading, error, hasMore, onLoadMore, selectedSkip, onSkipSelect }) => {
  const { targetRef } = useInfiniteScroll({
    hasMore,
    onLoadMore,
    loading,
  })

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 max-w-md mx-auto">
          <div className="text-red-600 dark:text-red-400 text-lg font-semibold mb-2">Unable to load skip options</div>
          <p className="text-red-500 dark:text-red-300">Please check your connection and try again</p>
        </div>
      </div>
    )
  }

  if (loading && skips.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-4/5 mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkipCardSkeleton key={index} delay={0} />
        ))}
      </div>
    )
  }

  if (skips.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 max-w-md mx-auto">
          <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold mb-2">No skips available</div>
          <p className="text-slate-500 dark:text-slate-400">No skip options found for your location</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {skips.map((skip, index) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={onSkipSelect}
            animationDelay={index * 80}
          />
        ))}
      </div>

      {hasMore && (
        <div ref={targetRef} className="flex justify-center py-8">
          {loading && <LoadingSpinner />}
        </div>
      )}

      {!hasMore && skips.length > 0 && (
        <div className="text-center py-8">
          <p className="text-slate-500 dark:text-slate-400 font-medium">You've seen all available skip options</p>
        </div>
      )}
    </div>
  )
}

export default SkipListing
