import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';
import { MovieCard } from '../components/MovieCard';

export function useMovies({ query, sort, setError }) {
    query = query.trim();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const previousQuery = useRef(query);

    // useCallback es exactamente lo mismo que useMemo solo que es
    // más óptimo para las funciones.
    const getMovies = useCallback(async ({ query }) => {
        if (query === previousQuery.current || query === '') return;

        try {
            setLoading(true);
            previousQuery.current = query;
            const newMovies = await searchMovies({ query });
            setMovies(newMovies);
            if (!newMovies) setError('No se han encontrado películas con ese nombre');
        } catch {
            setError('Error buscando la película');
        } finally {
            setLoading(false);
        }
    }, []);

    // useMemo sirve para memorizar el código que queramos para que
    // lo ejecute sólamente cuando unas dependencias cambien sus valores.
    // Sin esto, se vuelven a cargar todas las películas cada vez que
    // escribo o borro una letra en el buscador, ya que 'query' está
    // cambiando.
    const sortedMovies = useMemo(() => {
        if (!movies) return movies;

        const sortModes = {
            1: [...movies].sort((a, b) => a.Title.localeCompare(b.Title)),
            2: [...movies].sort((a, b) => a.Year.localeCompare(b.Year))
        }

        return sortModes[sort] ?? movies;
    }, [sort, movies]);

    const movieCards = movies ? Array.from(sortedMovies).map(
        movie => (
            <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                image={movie.Poster != 'N/A' ? movie.Poster : '/src/img/defaultMovie.webp'}
                year={movie.Year}
            />
        )
    ) : undefined;

    return { movies: movieCards, getMovies, loading };
}