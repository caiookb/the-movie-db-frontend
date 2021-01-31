import { MoviesActions } from "../libs/redux/actions";
import { MoviesServer } from "../server";
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
      return movie.describedGenres.push(findGenre.name);
    });
  });

  return movies;
};

export const searchMovie = (value) => (dispatch) => {
  return searchByNameOrGenre(value)
    .then(async (movieResponse) => {
      const movies = await addDescribedGenresToMovie(movieResponse.results);
      localStorage.setItem("moviesList", JSON.stringify(movies));
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
    console.log("Error", err);
    throw err;
  }
};

export const selectedMovieCard = (movie) => (dispatch) => {
  return MoviesServer.fetchMovieDetail(movie.id)
    .then(async (res) => {
      return MoviesServer.fetchMovieVideo(movie.id).then((movieResponse) => {
        res.trailer = `https://www.youtube.com/embed/${movieResponse?.results[0]?.key}`;
        localStorage.setItem("selectedMovie", JSON.stringify(res));
        dispatch(MoviesActions.saveMovieDetail(res));
      });
    })
    .catch((err) => {
      console.log("Error", err);
      throw err;
    });
};

export const updateListOnRedux = () => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("moviesList"));
  dispatch(MoviesActions.saveMoviesList(list ? list : []));
};

export const paginateMovies = (list) => (dispatch) => {
  localStorage.setItem("currentPage", JSON.stringify(list));
  dispatch(MoviesActions.saveMovieByPage(list));
};

export const clearMovieDetail = () => (dispatch) => {
  dispatch(MoviesActions.clearMovieDetail());
};
