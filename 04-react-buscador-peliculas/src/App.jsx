import './App.css'
import { LoadingIcon } from './components/LoadingIcon'
import { useMenu } from './hooks/useMenu'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { useCallback, useState } from 'react'
import { useTransition } from './hooks/useTransition'
import { CustomSelect } from './components/CustomSelect'
import debounce from 'just-debounce-it'

export function App() {
    // Variables
    const sortOptions = [
        { value: '0', name: 'Por defecto' },
        { value: '1', name: 'Título' },
        { value: '2', name: 'Año' },
        { value: '3', name: 'Duración' }
    ];

    // State Hooks
    const [selectVisibility, setSelectVisibility] = useState(false);
    const [searchVisibility, setSearchVisibility] = useState(false);
    const [error, setError] = useState(null);
    const [sort, setSort] = useState(0);

    // Custom Hooks
    const { menuVisibility, setMenuVisibility } = useMenu();
    const { query, setQuery } = useQuery({ setError });
    const { movies, getMovies, loading } = useMovies({ query, sort, setError });
    useTransition({ visibility: selectVisibility, elementsOf: 'select' });
    useTransition({ visibility: searchVisibility, elementsOf: 'search' });

    // Handlers
    const handleMenuClick = () => {
        setMenuVisibility(!menuVisibility);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        getMovies({ query });
    }

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        debouncedGetMovies(newQuery);
    }

    // Debounce
    const debouncedGetMovies = useCallback(
        debounce((query) => {
            getMovies({ query });
        }, 500), [getMovies]
    );

    return (
        <>
            <header>
                <section className='menu-button-container'>
                    <button onClick={handleMenuClick} className='menu-button'><ion-icon name="menu-outline"></ion-icon></button>
                </section>
                <a href='/' className='logo'>
                    <img className='logo-img' src='/src/img/logo.png' alt='Website Logo Image' />
                    <h1 className='logo-text'>Moviendo</h1>
                </a>
            </header>
            <aside className='side-menu'>
                <button onClick={handleMenuClick} className='close-button'><ion-icon name="close-outline"></ion-icon></button>
                <h2 className='side-menu-title'>Menú</h2>
                <nav className='menu'>
                    <ul className='menu-list'>
                        <li><a href="#">Principal</a></li>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Sobre nosotros</a></li>
                    </ul>
                </nav>
            </aside>
            <main>
                <header className='main-header'>
                    <h2 className='main-text'>Resultados de la búsqueda:</h2>
                    <form className='searcher' onSubmit={handleFormSubmit}>
                        <section className='menu-button-container'>
                            <button type='button' onClick={handleMenuClick} className='menu-button'><ion-icon name="menu-outline"></ion-icon></button>
                        </section>
                        <div className="buttons">
                            <section className='sort-selection-container'>
                                <button type='button' onClick={() => { setSelectVisibility(!selectVisibility) }} className='custom-select-button'><ion-icon name="funnel-outline"></ion-icon></button>
                                <CustomSelect key='1' setsort={setSort} options={sortOptions} />
                            </section>
                            <div>
                                <button onClick={() => { setSearchVisibility(!searchVisibility) }} type='button' className='search-button'><ion-icon name="search-outline"></ion-icon></button>
                                <input onChange={handleInputChange} value={query} type='text' name='searchFilm' className='search-film' placeholder='Busca alguna película...' autoComplete='off' />
                            </div>
                        </div>
                    </form>
                </header>
                <section className={`films-section${loading || error ? ' no-films' : ''} `}>
                    {
                        loading ? <LoadingIcon delay={0.2} /> : (error ? <p className='film-error-text'>{error}</p> : movies)
                    }
                </section>
            </main>
            <footer>
                <span>&copy; 2023 | Creado por Álvaro Navas Soto utilizando React.js</span>
            </footer>
        </>
    )
}

export default App
