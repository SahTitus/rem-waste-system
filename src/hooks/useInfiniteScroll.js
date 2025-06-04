import { useEffect, useRef, useCallback } from "react";

// Custom hook for infinite scroll using intersection observers
export const useInfiniteScroll = ({ hasMore, onLoadMore, loading }) => {
  const targetRef = useRef(); // Ref to attach to the element being observed

  // Callback triggered when target enters the viewport
  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !loading) {
        onLoadMore(); // Load more items when the target is in view
      }
    },
    [hasMore, loading, onLoadMore]
  );

  useEffect(() => {
    // Set up the observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "100px",
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget); // Start observing the target
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget); // Clean up observer on unmount
      }
    };
  }, [handleIntersection]);

  // Return the ref to be attached to the loading sentinel
  return { targetRef };
};
