import { createContext, useReducer } from "react";
import UpcomingReducer from "./UpcomingReducer";
import axios from "axios";

const UpcomingContext = createContext();

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const UpcomingProvider = ({ children }) => {
  const initialState = {
    movies: [],
    tvs: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(UpcomingReducer, initialState);

  const fetchMovies = async (media_type, url) => {
    const moviesData = await axios(
      `/${url}/${media_type}?api_key=${TMDB_TOKEN}&language=en-US&page=${state.currentPage}`
    );

    dispatch({
      type: "GET_UPCOMING",
      payload: moviesData.data.results,
    });
  };

  return (
    <UpcomingContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        tvs: state.tvs,
        fetchMovies,
      }}
    >
      {children}
    </UpcomingContext.Provider>
  );
};

export default UpcomingContext;
