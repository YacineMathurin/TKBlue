export const setSum = (value) => {
    console.log("Redux action fired");
    return (dispatch) => {
      dispatch({ type: "SUM", action: value });
    };
};
  