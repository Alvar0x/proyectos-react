export function LoadingIcon({ delay }) {
    return (
        <div className='loading-icon'>
            <i className="jumping-square" style={{ '--bgColor': '#709', '--delay': `${delay * 0}s` }}></i>
            <i className="jumping-square" style={{ '--bgColor': '#f05', '--delay': `${delay * 1}s` }}></i>
            <i className="jumping-square" style={{ '--bgColor': '#0fb', '--delay': `${delay * 2}s` }}></i>
            <i className="jumping-square" style={{ '--bgColor': '#f80', '--delay': `${delay * 3}s` }}></i>
        </div>
    );
}