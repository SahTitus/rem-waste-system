import { useState, useEffect, useCallback } from "react";

const API_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
const ITEMS_PER_PAGE = 6;

// Custom hook to manage skip data with pagination and infinite scroll
export const useSkipData = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [allData, setAllData] = useState([]);

  // Fetch initial skip data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch skip data");
      }

      const data = await response.json();
      setAllData(data);

      // Load first page
      const initialSkips = data.slice(0, ITEMS_PER_PAGE);
      setSkips(initialSkips);
      setHasMore(data.length > ITEMS_PER_PAGE);
      setPage(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load more skips
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate delay for a smooth ui
    setTimeout(() => {
      const startIndex = page * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newSkips = allData.slice(startIndex, endIndex);

      if (newSkips.length > 0) {
        setSkips((prev) => [...prev, ...newSkips]);
        setPage((prev) => prev + 1);
        setHasMore(endIndex < allData.length);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }, 800);
  }, [loading, hasMore, page, allData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    skips,
    loading,
    error,
    hasMore,
    loadMore,
  };
};
