import { useState, useEffect } from 'react';

export function useInput() {
    const [inputVisibility, setInputVisibility] = useState(false);

    useEffect(() => {
        const searchInput = document.querySelector('.search-film');
        const searchButton = document.querySelector('.search-button');

        if (inputVisibility) {
            searchInput.style = {
                width: '100%',
                padding: '0 20px',
                border: '2px solid #fff',
                'border-left': 'none'
            }
            searchInput.focus();
            searchButton.style.borderRadius = '5px 0 0 5px';
        } else {
            // searchInput.value = '';
            searchInput.style = {
                width: '0%',
                padding: '0 0',
                border: 'none'
            }
            searchInput.style.width = '0%';
            searchInput.style.padding = '0 0';
            searchInput.blur();
            searchButton.style.borderRadius = '5px';
            searchInput.style.border = 'none';
        }
    }, [inputVisibility]);

    return { inputVisibility, setInputVisibility };
}