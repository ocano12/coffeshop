export const _ADD_ITEM_TO_QUE = 'ADD_ITEM_TO_QUE';
export const _SET_COUNTDOWN = 'SET_COUNTDOWN';
export const _SET_WORKING = 'SET_WORKING';

export const addItemToQue = (item) => {
  console.log(item);
  return {
    type: _ADD_ITEM_TO_QUE,
    item,
  };
};

export const setCountdown = (countdown) => {
  return {
    type: _SET_COUNTDOWN,
    countdown,
  };
};

export const setWorking = (isWorking) => {
  return {
    type: _SET_WORKING,
    isWorking,
  };
};
