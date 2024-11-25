export const ADD_SIMON_COLOR = 'ADD_SIMON_COLOR';
export const SET_USER_INPUT = 'SET_USER_INPUT';
export const RESET_GAME = 'RESET_GAME';
export const SET_SCORE = 'SET_SCORE';
export const SET_GAME_STARTED = 'SET_GAME_STARTED';

export const addSimonColor = (color: string) => ({
  type: ADD_SIMON_COLOR,
  payload: color,
});

export const setUserInput = (input: string[]) => ({
  type: SET_USER_INPUT,
  payload: input,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const setScore = (score: number) => ({
  type: SET_SCORE,
  payload: score,
});

export const setGameStarted = (started: boolean) => ({
  type: SET_GAME_STARTED,
  payload: started,
});
