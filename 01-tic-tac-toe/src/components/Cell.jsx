export const Cell = ({ children, isSelected, isIndicator, updateBoard, index }) => {
	const handleClick = () => {
		updateBoard(index);
	}

	return (
		<div onClick={handleClick} className={`cell${isIndicator ? ' indicator' : ''}${isSelected ? ' is-selected-indicator' : ''}`}>
			<span className='cell-content'>
				{children}
			</span>
		</div>
	);
}