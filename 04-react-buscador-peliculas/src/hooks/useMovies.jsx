import { useState } from 'react';
import { API_ENDPOINT } from '../utils/constants';
import { MovieCard } from '../components/MovieCard';

export function useMovies({ query }) {
    const [responseMovies, setResponseMovies] = useState([]);

    const getMovies = () => {
        if (query !== '') {
            fetch(API_ENDPOINT + `&s=${query}`)
                .then(response => response.json())
                .then(jsonResponse => {
                    let aux = [];
                    const movieCards = Array.from(jsonResponse.Search).map(
                        movie => (
                            <MovieCard
                                key={movie.imdbID}
                                title={movie.Title}
                                image={movie.Poster != 'N/A' ? movie.Poster : '/src/img/defaultMovie.webp'}
                                year={movie.Year}
                            />
                        )
                    );
                    setResponseMovies(movieCards);
                })
        }
        else setResponseMovies(<p className='film-error-text'>No se encontraron películas</p>);
    }

    return { movies: responseMovies, getMovies };
}