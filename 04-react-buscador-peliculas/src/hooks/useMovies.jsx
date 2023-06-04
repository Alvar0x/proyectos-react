import { useState } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ query, setError }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const getMovies = async () => {
        try {
            setLoading(true);
            const newMovies = await searchMovies({ query });
            setMovies(newMovies);
        } catch (e) {
            setError('No se ha encontrado');
        } finally {
            setLoading(false);
        }
    };

    return { movies, getMovies, loading };
}