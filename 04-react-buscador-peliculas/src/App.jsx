import './App.css'
import { useMenu } from './hooks/useMenu'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { useInput } from './hooks/useInput'

export function App() {
    const { menuVisibility, setMenuVisibility } = useMenu();
    const { inputVisibility, setInputVisibility } = useInput();

    const { query, setQuery, error } = useQuery();
    const { movies, getMovies } = useMovies({ query });

    const handleClick = () => {
        setMenuVisibility(!menuVisibility);
        console.log(menuVisibility)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        getMovies();
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <>
            <header>
                <div className='left'>
                    <section className='menu-button-container'>
                        <button onClick={handleClick} className='menu-button'><ion-icon name="menu-outline"></ion-icon></button>
                    </section>
                    <section className='logo'>
                        <img className='logo-img' src='./src/img/logo.png' alt='Website Logo Image' />
                        <h1 className='logo-text'>Moviendo</h1>
                    </section>
                </div>
                <form className='searcher' onSubmit={handleSubmit}>
                    <button onClick={() => { setInputVisibility(!inputVisibility) }} type='submit' className='search-button'><ion-icon name="search-outline"></ion-icon></button>
                    <input onChange={handleChange} value={query} type='text' name='searchFilm' className='search-film' placeholder='Busca alguna película...' autoComplete='off' />
                </form>
            </header>
            <aside className='side-menu'>
                <button onClick={handleClick} className='close-button'><ion-icon name="close-outline"></ion-icon></button>
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
                <h2 className='main-text'>Resultados de la búsqueda:</h2>
                <section className='films-section'>
                    {
                        error ? <p className='film-error-text'>{error}</p> : movies
                    }
                    {/* <MovieCard key='peli' title='Spiderman 3' image='/src/img/spiderman3.jpg' year='2007' duration='139 min' /> */}
                </section>
            </main>
            <footer>
                <span>&copy; 2023 | Creado por Álvaro Navas Soto utilizando React.js</span>
            </footer>
        </>
    )
}

export default App
