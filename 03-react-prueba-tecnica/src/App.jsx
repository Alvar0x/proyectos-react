import { RANDOM_CAT_IMAGE_URL_PREFIX } from './utils/constants'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';
import './App.css'

export function App() {
    const { fact, refreshFact } = useCatFact();
    const { imageUrlSuffix } = useCatImage({ fact });

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrlSuffix && <img src={imageUrlSuffix} alt={`Image extracted using the three first words for ${fact}`} />}
            </section>
            <button onClick={refreshFact} className='update-button'>Actualizar</button>
        </main>
    )
}

export default App