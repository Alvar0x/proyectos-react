import { useState, useEffect } from 'react';

export function useMenu() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    useEffect(() => {
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.style.left = menuVisibility ? '0%' : '-25%';
        sideMenu.style.opacity = menuVisibility ? '1' : '0';
    }, [menuVisibility]);

    return { menuVisibility, setMenuVisibility };
}