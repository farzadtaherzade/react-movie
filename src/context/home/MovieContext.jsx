import axios from "axios";
import { createContext, useReducer, useState } from "react";
import MovieReducer from "./MovieReduer";

const MovieContext = createContext();

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const MovieProvider = ({ children }) => {
  const initialState = {
    movies: [],
    casts: [],
    movie: {},
    trailer: "",
    loading: true,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const fetchMovies = async (media_type, url) => {
    clearMovies();
    clearTrailerUrl();
    setLoading();
    const moviesData = await axios(
      `/${url}/${media_type}?api_key=${TMDB_TOKEN}&language=en-US&page=${state.currentPage}`
    );

    dispatch({
      type: "GET_MOVIES",
      payload: moviesData.data.results,
    });
  };

  const searchMovies = async (query) => {
    setLoading();
    clearMovies();
    const result = await axios.get(
      `/search/multi?api_key=${TMDB_TOKEN}&query=${query}`
    );
    console.log(result.data.results);
    dispatch({
      type: "GET_MOVIES",
      payload: result.data.results,
    });
  };

  const fetchSingleMovie = async (media_type, id) => {
    clearTrailerUrl();
    setLoading();
    clearCasts();
    clearMovies();
    const movie = await axios(
      `/${media_type}/${id}?api_key=${TMDB_TOKEN}&language=en-US`
    );
    getMovieTrailer(media_type, id);
    dispatch({
      type: "GET_DETAIL_MOVIE",
      payload: movie.data,
    });
  };

  const fetchCasts = async (media_type, id) => {
    setLoading();
    clearCasts();
    const movie = await axios(
      `/${media_type}/${id}/credits?api_key=${TMDB_TOKEN}&language=en-US`
    );
    dispatch({
      type: "GET_CASTS",
      payload: movie.data.cast,
    });
  };

  const getMovieTrailer = async (media_type, id) => {
    const movie = await axios(
      `/${media_type}/${id}/videos?api_key=${TMDB_TOKEN}&language=en-US`
    );
    dispatch({
      type: "GET_TRAILER",
      payload: movie.data.results[0].key,
    });
  };

  const clearCasts = () => {
    dispatch({
      type: "CLEAR_CASTS",
    });
  };
  const clearMovies = () => {
    dispatch({
      type: "CLEAR_MOVIE",
    });
  };
  const clearTrailerUrl = () => {
    dispatch({
      type: "CLEAR_URL",
    });
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        casts: state.casts,
        trailer: state.trailer,
        loading: state.loading,
        fetchMovies,
        fetchSingleMovie,
        fetchCasts,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
