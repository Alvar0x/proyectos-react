import { getRandomCatImageWithText } from '../services/facts'
import { useState, useEffect } from 'react'
import { RANDOM_CAT_IMAGE_URL_PREFIX } from '../utils/constants';

// Estos son un Custom Hooks. La diferencia que hay entre esto y una
// función, es que dentro de los Custom Hooks podemos utilizar hooks.

export function useCatImage({ fact }) {
    const [imageUrlSuffix, setImageUrlSuffix] = useState();

    useEffect(() => {
        if (!fact) return;

        const threeFirstWords = fact.split(' ', 3).join(' ');
        getRandomCatImageWithText(threeFirstWords)
            .then(newImageUrlSuffix => setImageUrlSuffix(newImageUrlSuffix));
    }, [fact]);

    return { imageUrlSuffix: RANDOM_CAT_IMAGE_URL_PREFIX + imageUrlSuffix };
}