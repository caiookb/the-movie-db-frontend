import fetchServer from "./Server";

export const fetchMoviesByName = (name) => {
  return fetchServer({
    method: "GET",
    path: ["search", `movie?query=${name}`],
  });
};

export const fetchMoviesByGenre = (genre) => {
  return fetchServer({
    method: "GET",
    path: ["discover", `movie?with_genres=${genre}`],
  });
};

export const fetchGenres = () => {
  return fetchServer({
    method: "GET",
    path: ["genre", "movie", "list?"],
  });
};
