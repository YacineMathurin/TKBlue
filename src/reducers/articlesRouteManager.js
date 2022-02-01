const initialState = {
  sum: 0
};

const articlesRouteManager = (state = initialState, { type, action: sum }) => {
  switch (type) {
    case "SUM":
      console.log("Summed is :", sum);
      return {
        ...state,
        sum,
      };
    

    default:
      return state;
  }
};
export default articlesRouteManager;
