export function MovieCard({ title, image, year }) {
    return (
        <div className='flex-fixer'>
            <a href="#" className='film-link'>
                <article className='film'>
                    <header className='film-header'>
                        <h3 className='film-title'>{title}</h3>
                    </header>
                    <main className='film-body'>
                        <img className='film-image' src={image} alt="Film Image" />
                    </main>
                    <footer className='film-footer'>
                        <span className='film-year'>{year}</span>
                        <span className='film-duration'>{Math.ceil(Math.random() * 100 + 100)} min</span>
                    </footer>
                </article>
            </a>
        </div>
    );
}