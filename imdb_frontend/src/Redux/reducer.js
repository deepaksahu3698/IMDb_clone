const { TOP_PICKS } = require('./state');

const initState = {
  topPick: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOP_PICKS: {
      return {
        topPick: [ payload],
      };
    }
    default:
      return state;
  }
};
