import React from 'react'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { Cell } from './components/Cell'
import { Dialog } from './components/Dialog'
import { GAME_STATES, TURNS } from './constants'
import { checkGameState } from './logic/board'
import { resetGameStorage, saveGameToStorage } from './logic/storage'

function App() {
	const startingBoard = Array(9).fill(null);
	const startingTurn = Math.ceil(Math.random() * 2) == 1 ? TURNS.X : TURNS.O;

	const [board, setBoard] = useState(JSON.parse(window.localStorage.getItem('board')) ?? startingBoard);
	const [turn, setTurn] = useState(window.localStorage.getItem('turn') ?? startingTurn);
	const [gameState, setGameState] = useState(GAME_STATES.PLAYING);

	const updateBoard = (index) => {
		// Si la celda ya tiene valor o la partida ha terminado, no haremos nada
		if (board[index] || gameState != GAME_STATES.PLAYING) return;

		// Hacemos una copia del tablero, ya que no debemos cambiar la constante,
		// debemos cambiar la copia y luego asignarla con el setter.
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);

		// Comprobamos el estado de la partida con este nuevo movimiento
		const newGameState = checkGameState(newBoard);
		setGameState(newGameState);
		if (newGameState === GAME_STATES.WIN) confetti();

		// Vemos cuál es el siguiente turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		if (newGameState === GAME_STATES.PLAYING) setTurn(newTurn);

		// Guardamos partida por si se recarga la página
		saveGameToStorage({ board: newBoard, turn: newTurn });
	}

	const resetGame = () => {
		// Para reiniciar el juego sólo tenemos que establecer los valores por
		// defecto de los estados
		setBoard(startingBoard);
		setTurn(Math.ceil(Math.random() * 2) == 1 ? TURNS.X : TURNS.O);
		setGameState(GAME_STATES.PLAYING);

		// Eliminamos el guardado de la partida porque si no, al reiniciar
		// la partida, si recargamos la página, volverá a estar todo
		// como antes de reiniciar la partida
		resetGameStorage();
	}

	// Texto que se mostrará en el diálogo del final
	const finalMessage = gameState === GAME_STATES.WIN ? 'Winner: ' + turn
		: (gameState === GAME_STATES.DRAW ? '¡DRAW!' : '');

	// Clases que utilizará el diálogo del final
	const dialogClasses = `dialog-background${gameState !== GAME_STATES.PLAYING ? ' show' : ''}`;
	
	return (
		<>
			<main className='board'>
				<button onClick={resetGame} className='beauty-button little-button'>
					<span className='beauty-button-text'>⟳</span>
				</button>
				<h1 className='board-title'>Tic Tac Toe</h1>
				<section className='game'>
					{
						board.map((cellValue, index) => <Cell key={index} updateBoard={updateBoard} index={index}>{cellValue}</Cell>)
					}
				</section>
				<section className='turn-indicator'>
					<Cell isSelected={turn === TURNS.X} isIndicator>{TURNS.X}</Cell>
					<Cell isSelected={turn === TURNS.O} isIndicator>{TURNS.O}</Cell>
				</section>
			</main>
			<Dialog key='dialogGameState' classes={dialogClasses} dialogText={finalMessage} buttonText='Play again' onButtonClick={resetGame} />
		</>
	);
}

export default App
