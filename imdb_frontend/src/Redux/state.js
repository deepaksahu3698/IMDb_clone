export const TOP_PICKS = 'TOP_PICKS';
export const USER = "USER"

export const topPicks = payload => {
  return {
    type: TOP_PICKS,
    payload,
  };
};


export const users = payload => {
  console.log(payload.data)
  return {
    type: USER,
    payload:payload.data,
  };
};
 