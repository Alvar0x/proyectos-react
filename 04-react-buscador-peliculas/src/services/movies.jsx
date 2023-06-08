import { API_ENDPOINT } from '../utils/constants';

export const searchMovies = async ({ query }) => {
    if (query.trim() === '') return null;

    try {
        const response = await fetch(API_ENDPOINT + `&s=${query}`);
        const jsonResponse = await response.json();
        return jsonResponse.Search;
    } catch (error) {
        throw new Error('Error buscando películas');
    }
}