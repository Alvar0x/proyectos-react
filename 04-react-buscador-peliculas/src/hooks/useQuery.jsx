import { useState, useEffect, useRef } from 'react';

export function useQuery() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = query.trim() === '';
            return;
        }

        if (query.trim() === '') {
            setError('Debes escribir algo para encontrar una película');
            return;
        }

        setError(null);
    }, [query]);

    return { query, setQuery, error, setError };
}