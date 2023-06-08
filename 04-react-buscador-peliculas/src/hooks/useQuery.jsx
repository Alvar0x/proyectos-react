import { useState, useEffect, useRef } from 'react';

export function useQuery({ setError }) {
    const [query, setQuery] = useState('');
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

    return { query, setQuery };
}