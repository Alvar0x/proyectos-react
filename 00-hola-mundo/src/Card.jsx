import { useState } from 'react';
import './Card.css'

export function Card({id, picture, name, formatNickname, nickname, isFollowingYou}) {
    const [following, setFollowing] = useState(false);
    const [inside, setInside] = useState(false);

    const handleClick = () => {
        setFollowing(!following);
    }

    const handleMouseEnter = () => {
        setInside(true);
    }

    const handleMouseLeave = () => {
        setInside(false);
    }

    const btnClassNames = `followBtn${following ? ' following' : ''}`;
    let btnText = following ? 'Siguiendo' : 'Seguir';
    btnText = inside && following ? 'Dejar de seguir' : btnText;

    return (
        <article id={id} className="card">
            <div className='imgContainer'>
                <img src={picture} alt='profileImage'></img>
            </div>
            <div className='infoContainer'>
                <span>{name}</span>
                <div>
                    <span className='nickname'>{formatNickname(nickname)}</span>
                    {isFollowingYou ? <span className='isFollowingYou'>Te sigue</span> : ''}
                </div>
            </div>
            <div className='btnContainer'>
                <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={btnClassNames}>{btnText}</button>
            </div>
        </article>
    );
}