import { MoviesTypes } from "../types";

const initialState = {
  moviesList: [],
  currentPage: [],
  selectedMovie: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MoviesTypes.SAVE_MOVIES_BY_PAGE:
      return { ...state, currentPage: payload };
    case MoviesTypes.SAVE_MOVIES_LIST:
      return { ...state, moviesList: payload };
    case MoviesTypes.SAVE_MOVIE_DETAIL:
      return { ...state, selectedMovie: payload };
    case MoviesTypes.CLEAN_MOVIES:
      return { ...state };
    default:
      return state;
  }
};
