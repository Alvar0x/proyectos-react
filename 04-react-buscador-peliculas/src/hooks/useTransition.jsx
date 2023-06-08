import { useEffect } from 'react';

export function useTransition({ visibility, elementsOf }) {
    useEffect(() => {
        let elements;

        if (elementsOf === 'select') {
            elements = {
                container: document.querySelector('.sort-selection-container'),
                component: document.querySelector('.custom-select'),
                button: document.querySelector('.custom-select-button')
            }
        } else if (elementsOf === 'search') {
            elements = {
                container: document.querySelector('.buttons>div'),
                component: document.querySelector('.buttons>div .search-film'),
                button: document.querySelector('.buttons>div .search-button')
            }
        }

        if (visibility) showComponent(elements, elementsOf)
        else hideComponent(elements, elementsOf);
    }, [visibility]);
}

function showComponent({ container, component, button }, elementsOf) {
    const screenSize = window.innerWidth < 641 ? 's' : (window.innerWidth < 1008 ? 'm' : 'l');
    const customSelectText = document.querySelector('.custom-select-text');

    if (elementsOf === 'select') {
        customSelectText.style.display = 'inline';
        setTimeout(() => {
            customSelectText.style.opacity = '1';
        }, 1);
    }
    container.style.width = '50%';
    component.style.width = '100%';
    component.style.padding = screenSize === 's' ? '0 10px' : '0 20px';
    component.style.border = '2px solid #fff';
    component.style.borderLeft = 'none';
    if (elementsOf === 'search') component.focus();
    button.style.borderRadius = '5px 0 0 5px';
}

function hideComponent({ container, component, button }, elementsOf) {
    const customSelectText = document.querySelector('.custom-select-text');

    container.style.width = '50px'
    component.style.width = '0%';
    if (elementsOf === 'search') component.blur();
    button.style.borderRadius = '5px';
    if (elementsOf === 'select') {
        customSelectText.style.opacity = '0';
    }
    setTimeout(() => {
        component.style.padding = '0 0';
        component.style.border = 'none';
        if (elementsOf === 'select') customSelectText.style.display = 'none';
    }, 200);
}