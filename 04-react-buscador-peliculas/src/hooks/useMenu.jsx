import { useState, useEffect } from 'react';

export function useMenu() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    useEffect(() => {
        const sideMenu = document.querySelector('.side-menu');
        const screenSize = window.innerWidth < 641 ? 's' : (window.innerWidth < 1008 ? 'm' : 'l');

        if (menuVisibility) {
            sideMenu.style.display = 'flex';
            setTimeout(() => {
                sideMenu.style.left = '0';
                sideMenu.style.opacity = '0.9';
            }, 1);
        } else {
            sideMenu.style.left = screenSize === 's' ? '-100%' : (screenSize === 'm' ? '-53%' : '-25%');
            sideMenu.style.opacity = '0';
            setTimeout(() => {
                sideMenu.style.display = 'none';
            }, 200);
        }
    }, [menuVisibility]);

    return { menuVisibility, setMenuVisibility };
}