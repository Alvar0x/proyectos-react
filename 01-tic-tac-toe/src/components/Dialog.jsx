import { closeDialogPanel } from "../logic/board";

export const Dialog = ({classes, dialogText, buttonText, onButtonClick}) => (
    <div className={classes}>
            <div className='dialog'>
                <button onClick={closeDialogPanel} className='beauty-button little-button'><span className='beauty-button-text'>×</span></button>
                <span className='dialog-text'>{dialogText}</span>
                <button onClick={onButtonClick} className='beauty-button'>
                    <span className='beauty-button-text'>{buttonText}</span>
                </button>
            </div>
    </div>
);