import { useEffect, useState } from 'react'
import './App.css'

const RANDOM_CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact';
const RANDOM_CAT_IMAGE_URL = (text) => `https://cataas.com/cat/says/${text}?size=50&color=red&json=true`;
const RANDOM_CAT_IMAGE_URL_PREFIX = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState();
    const [imageUrlSuffix, setImageUrlSuffix] = useState();

    useEffect(() => {
        fetch(RANDOM_CAT_FACT_ENDPOINT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);
            });
    }, []);

    useEffect(() => {
        if (!fact) return;

        const threeFirstWords = fact.split(' ', 3).join(' ');
        fetch(RANDOM_CAT_IMAGE_URL(threeFirstWords))
            .then(response => response.json())
            .then(response => {
                const { url } = response;
                setImageUrlSuffix(url);
            });
    }, [fact]);

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrlSuffix && <img src={RANDOM_CAT_IMAGE_URL_PREFIX + imageUrlSuffix} alt={`Image extracted using the three first words for ${fact}`} />}
            </section>
        </main>
    )
}

export default App