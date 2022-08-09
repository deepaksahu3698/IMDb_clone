const { TOP_PICKS, USER } = require('./state');

const initState = {
  topPick: [],
  user:""
};
// name:{
//   type:String,
//   required:true
// },
// email:{
//   type:String,
//   required:true
// },
// password:{
//   type:String,
//   required:true
// },
// subscribed:[{},{},{}]
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
