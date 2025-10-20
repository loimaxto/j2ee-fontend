import { useState, useEffect, useCallback } from 'react';

/**
 * Custom React Hook for fetching data from an API endpoint.
 * @param {Function} apiCall - An async function that performs the API request (e.g., a method from UserService).
 * @param {Array} dependencies - An array of dependencies for the effect (re-run fetch when they change).
 * @returns {{ data: any, isLoading: boolean, error: Error | null, refetch: () => void }}
 */
const useFetch = (apiCall, dependencies = []) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refetchTrigger, setRefetchTrigger] = useState(0);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await apiCall();
            setData(result);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.response?.data?.message || err.message || 'An unknown error occurred');
            setData(null);
        } finally {
            setIsLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiCall, ...dependencies]); 

    useEffect(() => {
        fetchData();
    }, [fetchData, refetchTrigger]);

    const refetch = useCallback(() => {
        setRefetchTrigger(prev => prev + 1);
    }, []);

    return { data, isLoading, error, refetch };
};

export default useFetch;