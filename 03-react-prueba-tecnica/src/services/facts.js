import { RANDOM_CAT_FACT_ENDPOINT, RANDOM_CAT_IMAGE_URL } from '../utils/constants'

export const getRandomFact = async () => {
    const response = await fetch(RANDOM_CAT_FACT_ENDPOINT);
    const data = await response.json();
    const { fact } = data;
    return fact;
}

export const getRandomCatImageWithText = async (imageText) => {
    const response = await fetch(RANDOM_CAT_IMAGE_URL(imageText));
    const response_2 = await response.json();
    const { url } = response_2;
    return url;
}