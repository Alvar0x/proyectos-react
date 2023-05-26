import {Card} from './Card.jsx'
import './App.css'

const formatNickname = (nickname) => `@${nickname}`;

const profiles = [
    {picture: 'src/assets/alvaro.jpg', name: 'Álvaro Navas', nickname: 'alvaronavaas', following: true, isFollowingYou: true},
    {picture: 'src/assets/elena.jpg', name: 'Elena González', nickname: 'ghelen.a', following: true, isFollowingYou: false},
    {picture: 'src/assets/carlos.jpg', name: 'Carlos López', nickname: 'carlosswimmer2000', following: false, isFollowingYou: true},
    {picture: 'src/assets/jimenez.jpg', name: 'Álvaro Jiménez', nickname: 'alvarox00', following: false, isFollowingYou: false}
];

const cards = profiles.map((profile) => (
        <Card
            key={profile.nickname}
            picture={profile.picture}
            name={profile.name}
            formatNickname={formatNickname}
            nickname={profile.nickname}
            following={profile.following}
            isFollowingYou={profile.isFollowingYou}
        >Elemento hijo</Card>
        //El elemento hijo es accesible desde la funcion Card añadiendo un parámetro 'children'
    )
);

export function App() {
    return (
        <section className='panel'>
            <span id='pnlTitle'>A quién seguir</span>
            <div id='cardsContainer'>
                { cards }
            </div>
        </section>
    );
}