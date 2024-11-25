import {
    ADD_SIMON_COLOR,
    SET_USER_INPUT,
    RESET_GAME,
    SET_SCORE,
    SET_GAME_STARTED,
  } from '../redux/gameActions';
  import { SimonColors } from '../consts/SimonColors';
  
  interface GameState {
    simonSequence: SimonColors[];
    userInput: SimonColors[];
    score: number;
    gameStarted: boolean;
  }
  
  const initialState: GameState = {
    simonSequence: [],
    userInput: [],
    score: 0,
    gameStarted: false,
  };
  
  const gameReducer = (state = initialState, action: any): GameState => {
    switch (action.type) {
      case ADD_SIMON_COLOR:
        return {
          ...state,
          simonSequence: [...state.simonSequence, action.payload],
        };
      case SET_USER_INPUT:
        return {
          ...state,
          userInput: action.payload,
        };
      case SET_SCORE:
        return {
          ...state,
          score: action.payload,
        };
      case SET_GAME_STARTED:
        return {
          ...state,
          gameStarted: action.payload,
        };
      case RESET_GAME:
        return initialState;
      default:
        return state;
    }
  };
  
  export default gameReducer;
  