import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(url, options);

                if (!response.ok) {
                    // throw new Error(`HTTP error! status: ${response.status}`)
                    setError(new Error(`An error occurred, HTTP error! status: ${response.status}`));
                }
                else {
                    const result = await response.json();
    
                    setData(result.data);
                }
            }
            catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, refreshKey]);

    function refresh() {
        setRefreshKey(prev => prev + 1);
    }

    return { data, loading, error, refresh };
}

/* import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T>(url: string, options?: RequestInit): [FetchState<T>, () => void] {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    const [fetchTrigger, setFetchTrigger] = useState(0); // Trigger to force refetch

    const fetchData = useCallback(async () => {
        setState({ data: null, loading: true, error: null });

        try {
            const response = await fetch(url, options);

            if (!response.ok) throw new Error(`Error: ${response.statusText}`);

            const data: T = (await response.json()).data;

            setState({ data, loading: false, error: null });
        }
        catch (error) {
            setState({ data: null, loading: false, error: (error as Error).message });
        }
    }, [url, options]);

    useEffect(() => {
        console.log("YH");
        
        fetchData();
    }, [fetchTrigger, fetchData]);

    // Function to trigger a re-fetch
    const refetch = () => setFetchTrigger(prev => prev + 1);

    return [state, refetch];
} */