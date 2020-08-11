import {
  _ADD_ITEM_TO_QUE,
  _SET_WORKING,
  _SET_COUNTDOWN,
} from './coffee-counter.actions';
import {
  _selectQue,
  _selectIsWorking,
  _selectCountdown,
} from './coffee-counter.selectors';

const _initalState = {
  que: [],
  pickUp: [],
  countdown: 0,
  isWorking: false,
};

export const selectQue = (state) => {
  const que = state.que;
  return _selectQue(que);
};

export const selectIsWorking = (state) => {
  const isWorking = state.isWorking;
  return _selectIsWorking(isWorking);
};

export const selectCountdown = (state) => {
  const countdown = state.countdown;
  return _selectCountdown(state);
};

const coffeeCounter = (state = _initalState, action) => {
  switch (action.type) {
    case _ADD_ITEM_TO_QUE: {
      return {
        ...state,
        que: [...state.que, action.item],
      };
    }
    case _SET_WORKING: {
      return {
        ...state,
        isWorking: action.isWorking,
      };
    }
    case _SET_COUNTDOWN: {
      return {
        ...state,
        countdown: action.countdown,
      };
    }
    default: {
      return state;
    }
  }
};

export default coffeeCounter;
