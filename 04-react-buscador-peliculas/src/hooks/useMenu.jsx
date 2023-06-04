import { useState, useEffect } from 'react';

export function useMenu() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    useEffect(() => {
        const sideMenu = document.querySelector('.side-menu');

        if (menuVisibility) {
            sideMenu.style.display = 'flex';
            setTimeout(() => {
                sideMenu.style.left = '0';
                sideMenu.style.opacity = '0.9';
            }, 1);
        } else {
            sideMenu.style.left = window.innerWidth < 641 ? '-100%' : '-25%';
            sideMenu.style.opacity = '0';
            setTimeout(() => {
                sideMenu.style.display = 'none';
            }, 200);
        }
    }, [menuVisibility]);

    return { menuVisibility, setMenuVisibility };
}