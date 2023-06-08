import { useEffect, useState } from 'react';

export function CustomSelect({ setsort, options }) {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const dropdown = document.querySelector('.custom-select-dropdown');
        const button = document.querySelector('.custom-select-button');

        button.addEventListener('click', handleCustomSelectButtonClick);

        if (opened) {
            dropdown.style.display = 'flex';
            setTimeout(() => {
                dropdown.style.height = '140px';
                dropdown.style.padding = '5px 5px';
            }, 1);
        } else {
            dropdown.style.height = '0';
            dropdown.style.padding = '0';
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 200);
        }

        return () => {
            button.removeEventListener('click', handleCustomSelectButtonClick);
        }
    }, [opened]);

    const handleCustomSelectButtonClick = () => {
        if (opened) setOpened(false);
    }

    const handleOptionClick = (e) => {
        const allOptions = document.querySelectorAll('.custom-select-dropdown>article');
        allOptions.forEach((option) => {
            option.removeAttribute('selected');
        });
        e.target.setAttribute('selected', '');
        setsort(e.target.getAttribute('value'));
        console.log(e.target.getAttribute('value'));
    }

    const selectedOption = document.querySelector('.custom-select-dropdown>article[selected]');

    return (
        <div onClick={() => { setOpened(!opened) }} className='custom-select'>
            <span className='custom-select-text'>{selectedOption ? selectedOption.innerText : 'Por defecto'}</span>
            <section className='custom-select-dropdown'>
                {
                    options.map((option) => {
                        return <article onClick={handleOptionClick} key={option.value} value={option.value}>{option.name}</article>;
                    })
                }
            </section>
        </div>
    );
}