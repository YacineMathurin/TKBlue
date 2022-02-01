const initialState = {

};

const routeCaptain = (state = initialState, { type, action }) => {
  switch (type) {
    case "HOME":
      console.log("Back to home fired ! ", action);
      return {
        ...state,
        backToHome: action,
      };
    

    default:
      return state;
  }
};
export default routeCaptain;
