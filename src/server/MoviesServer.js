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

export const fetchMovieDetail = (id) => {
  return fetchServer({
    method: "GET",
    path: ["movie", `${id}?`],
  });
};

export const fetchMovieVideo = (id) => {
  return fetchServer({
    method: "GET",
    path: ["movie", `${id}`, "videos?"],
  });
};

export const fetchGenres = () => {
  return fetchServer({
    method: "GET",
    path: ["genre", "movie", "list?"],
  });
};
