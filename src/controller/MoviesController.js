import { MoviesActions } from "../libs/redux/actions";
import { MoviesServer } from "../server";
import Store from "../Store";
import { matchGenreByNameToId } from "../utils/Utils";

const searchByNameOrGenre = (string) => {
  const genreId = matchGenreByNameToId(string);
  return genreId !== undefined
    ? MoviesServer.fetchMoviesByGenre(genreId)
    : MoviesServer.fetchMoviesByName(string);
};

const addDescribedGenresToMovie = async (movies) => {
  const genres = await getGenres();

  movies.forEach((movie) => {
    movie.describedGenres = [];
    movie.genre_ids.map((genreId) => {
      const findGenre = genres.find((genre) => genre.id === genreId);
      movie.describedGenres.push(findGenre.name);
    });
  });

  return movies;
};

export const searchMovie = (value) => (dispatch) => {
  return searchByNameOrGenre(value)
    .then(async (movieResponse) => {
      console.log("MOVIE RESPOSNE", movieResponse);
      const movies = await addDescribedGenresToMovie(movieResponse.results);
      dispatch(MoviesActions.saveMoviesList(movies));

      return movies;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const getGenres = async () => {
  try {
    const response = await MoviesServer.fetchGenres();
    return response.genres;
  } catch (err) {
    throw err;
  }
};

export const saveMoviesOnRedux = (movies) => (dispatch) => {
  dispatch(MoviesActions.saveMoviesList(movies));
};

export const paginateMovies = (list) => (dispatch) => {
  dispatch(MoviesActions.saveMovieByPage(list));
};

export const selectedMovieCard = (movie) => (dispatch) => {
  return MoviesServer.fetchMovieDetail(movie.id)
    .then((res) => {
      localStorage.setItem("selectedMovie", JSON.stringify(res));
      dispatch(MoviesActions.saveMovieDetail(res));
    })
    .catch((err) => {
      throw err;
    });
};
