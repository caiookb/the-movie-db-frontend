import { MoviesTypes } from "../types";

export const saveMovies = (movies) => ({
  type: MoviesTypes.SAVE_MOVIES,
  payload: movies,
});

export const saveMovieDetail = (movie) => ({
  type: MoviesTypes.SAVE_MOVIE_DETAIL,
  payload: movie,
});

export const saveMovieByPage = (list) => ({
  type: MoviesTypes.SAVE_MOVIES_BY_PAGE,
  payload: list,
});

export const cleanMovies = () => ({
  type: MoviesTypes.CLEAN_MOVIES,
  payload: {},
});
