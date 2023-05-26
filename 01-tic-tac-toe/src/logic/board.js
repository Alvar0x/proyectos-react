import { WINNER_COMBOS, GAME_STATES } from "../constants";

export const checkGameState = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    const notNull = boardToCheck[a] && boardToCheck[b] && boardToCheck[c];

    // Si las posiciones contienen los mismos valores y no son nulos,
    // tenemos tres en raya, por lo cual tenemos ganador
    if (
      notNull &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return GAME_STATES.WIN;
    }
  }

  // Si todas las celdas tienen un valor, significa que se han hecho
  // los movimientos máximos y tendríamos un empate
  if (boardToCheck.every((v) => v !== null)) {
    return GAME_STATES.DRAW;
  }

  // Si hemos llegado a este punto, significa que ni tenemos ganador,
  // ni hay empate, por lo cual seguimos jugando
  return GAME_STATES.PLAYING;
};

export const closeDialogPanel = () => {
  // Eliminamos la clase 'show' al diálogo para ocultarlo
  document.querySelector(".dialog-background").classList.remove("show");
};
