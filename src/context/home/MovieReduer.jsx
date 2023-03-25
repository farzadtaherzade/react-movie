const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
      };
    case "GET_DETAIL_MOVIE":
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case "GET_CASTS":
      return {
        ...state,
        casts: action.payload,
        loading: false,
      };
    case "GET_TRAILER":
      return {
        ...state,
        trailer: action.payload,
      };
    case "CLEAR_CASTS":
      return {
        ...state,
        casts: [],
        loading: false,
      };
    case "CLEAR_MOVIE":
      return {
        ...state,
        movie: {},
        loading: true,
      };
    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
        loading: true,
      };
    case "CLEAR_URL":
      return {
        ...state,
        trailer: {},
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default MovieReducer;
