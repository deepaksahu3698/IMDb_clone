const { TOP_PICKS, USER } = require('./state');

const initState = {
  topPick: [],
  user:""
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOP_PICKS: {
      return {
        ...state,
        topPick: [ payload],
      };
    }
    case USER: {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};
