import { MoviesActions } from "../libs/redux/actions";
import { MoviesServer } from "../server";
import { matchGenreByNameToId } from "../utils/Utils";

const searchByNameOrGenre = (string) => {
  const genreId = matchGenreByNameToId(string);
  return genreId !== undefined
    ? MoviesServer.fetchMoviesByGenre(genreId)
    : MoviesServer.fetchMoviesByName(string);
};

export const searchMovie = (name) => (dispatch) => {
  return searchByNameOrGenre(name).then((movieResponse) => {
    getGenres.then((genres) => {
      movieResponse.results.map((movie) => {
        const describedGenres = [];
        movie.genre_ids.map((genreId) => {
          const findGenre = genres.find((genres) => genres.id === genreId);
          return findGenre ? describedGenres.push(findGenre.name) : null;
        });
        movie.describedGenres = [...new Set(describedGenres)];
      });
      dispatch(MoviesActions.saveMovies(movieResponse.results));
    });
  });
};

const getGenres = MoviesServer.fetchGenres()
  .then((res) => {
    return res.genres;
  })
  .catch((err) => {
    throw err;
  });

export const paginateMovies = (list) => (dispatch) => {
  dispatch(MoviesActions.saveMovieByPage(list));
};
