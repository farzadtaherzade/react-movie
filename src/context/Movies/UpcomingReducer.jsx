const UpcomingReducer = (state, action) => {
  switch (action.type) {
    case "GET_UPCOMING":
      return {
        ...state,
        movies: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
      };
    default:
      return state;
  }
};

export default UpcomingReducer;
