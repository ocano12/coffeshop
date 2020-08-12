import {
  _ADD_ITEM_TO_QUE,
  _SET_WORKING,
  _SET_COUNTDOWN,
  _SET_FINISHED,
} from './coffee-counter.actions';

import {
  _selectQue,
  _selectIsWorking,
  _selectCountdown,
  _selectFinished,
} from './coffee-counter.selectors';

const _initalState = {
  que: [],
  finished: [],
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

  return _selectCountdown(countdown);
};

export const selectFinished = (state) => {
  const finished = state.finished;
  return _selectFinished(finished);
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
    case _SET_FINISHED: {
      return {
        ...state,
        finished: [...state.finished, action.finishedItem],
        que: state.que.filter((item) => action.finishedItem.id !== item.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default coffeeCounter;
