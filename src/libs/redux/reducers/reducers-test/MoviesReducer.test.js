import MoviesReducer from "../MoviesReducer";

describe("Movies Reducer", () => {
  it("Has a default state", () => {
    expect(MoviesReducer(undefined, { type: "unexpected" })).toEqual({
      currentPage: [],
      moviesList: [],
      selectedMovie: {},
    });
  });

  it("can handle SAVE_MOVIES_LIST", () => {
    expect(
      MoviesReducer(undefined, {
        type: "SAVE_MOVIES_LIST",
        payload: [{ movie: "Harry Potter" }],
      })
    ).toEqual({
      moviesList: [{ movie: "Harry Potter" }],
      currentPage: [],
      selectedMovie: {},
    });
  });

  it("can handle SAVE_MOVIES_BY_PAGE", () => {
    expect(
      MoviesReducer(undefined, {
        type: "SAVE_MOVIES_BY_PAGE",
        payload: [{ page1: "Harry Potter" }, { page2: "Harry Potter" }],
      })
    ).toEqual({
      moviesList: [],
      currentPage: [{ page1: "Harry Potter" }, { page2: "Harry Potter" }],
      selectedMovie: {},
    });
  });

  it("can handle SAVE_MOVIE_DETAIL", () => {
    expect(
      MoviesReducer(undefined, {
        type: "SAVE_MOVIE_DETAIL",
        payload: { movie: "Harry Potter" },
      })
    ).toEqual({
      moviesList: [],
      currentPage: [],
      selectedMovie: { movie: "Harry Potter" },
    });
  });

  it("can handle CLEAR_MOVIE_DETAIL", () => {
    expect(
      MoviesReducer(undefined, {
        type: "CLEAR_MOVIE_DETAIL",
        payload: {},
      })
    ).toEqual({
      moviesList: [],
      currentPage: [],
      selectedMovie: {},
    });
  });
});
