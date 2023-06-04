import { MovieCard } from '../components/MovieCard';
import { API_ENDPOINT } from '../utils/constants';

export const searchMovies = async ({ query }) => {
    if (query.trim() === '') return null;

    try {
        const response = await fetch(API_ENDPOINT + `&s=${query}`);
        const jsonResponse = await response.json();
        return Array.from(jsonResponse.Search).map(
            movie => (
                <MovieCard
                    key={movie.imdbID}
                    title={movie.Title}
                    image={movie.Poster != 'N/A' ? movie.Poster : '/src/img/defaultMovie.webp'}
                    year={movie.Year}
                />
            )
        );
    } catch (error) {
        throw new Error('Error buscando películas');
    }
}