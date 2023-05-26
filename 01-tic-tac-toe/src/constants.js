// Estos son los turnos que tiene el juego
export const TURNS = {
  X: "⨉",
  O: "⭘",
};

// Estos son los estados que tiene el juego
export const GAME_STATES = {
  WIN: true,
  DRAW: false,
  PLAYING: null,
};

// Estas son todas las posibilidades que hay para que haya un ganador
export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
