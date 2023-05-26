import { useEffect, useState } from 'react'
import './App.css'

const FollowCursor = ({ styles }) => {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			setPosition({ x: clientX - 25, y: clientY - 25 });
		}

		if (enabled) {
			window.addEventListener('mousemove', handleMouseMove);
		}
		console.log('Effect')

		// Clean Up se ejecuta cuando:
		// -> el componente se desmonta
		// -> cambian las dependencias (en este caso 'enabled'),
		//	  antes de ejecutar el efecto nuevo
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			console.log('Clean Up')
		}
	}, [enabled]);

	const buttonText = enabled ? 'Desactivar' : 'Activar';

	return (
		<>
			<div className='followCursor' style={{ top: position.y, left: position.x }} />
			<CustomButton key='CustomButton1' handleClick={() => { setEnabled(!enabled); }} >{buttonText}</CustomButton>
		</>
	)
}

const CustomButton = ({ children, handleClick }) => (
	<button onClick={handleClick} className='custom-button'>
		<span className='custom-button-text'>
			{children}
		</span>
	</button>
)

function App() {
	return (
		<main>
			<FollowCursor key='FollowCursor1' />
		</main>
	)
}

export default App
