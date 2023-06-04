import { useState, useEffect } from 'react';

export function useInput() {
    const [inputVisibility, setInputVisibility] = useState(false);

    useEffect(() => {
        const searchInput = document.querySelector('.search-film');
        const searchButton = document.querySelector('.search-button');

        if (inputVisibility) {
            searchInput.style.width = '100%';
            searchInput.style.padding = '0 20px';
            searchInput.style.border = '2px solid #fff';
            searchInput.style.borderLeft = 'none';
            searchInput.focus();
            searchButton.style.borderRadius = '5px 0 0 5px';
        } else {
            searchInput.style.width = '0%';
            searchInput.blur();
            searchButton.style.borderRadius = '5px';
            setTimeout(() => {
                searchInput.style.padding = '0 0';
                searchInput.style.border = 'none';
            }, 200);
        }
    }, [inputVisibility]);

    return { inputVisibility, setInputVisibility };
}