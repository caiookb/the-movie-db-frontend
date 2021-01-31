import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("pagination component", () => {
  const returnPageLength = (movies) => {
    const data = Array(movies);

    const splicePages = [...Array(Math.ceil(data?.length / 5 || 1))].map(
      (_) => {
        return data?.splice(0, 5);
      }
    );

    const pages = Array.from(
      { length: splicePages?.length || 1 },
      (v, k) => k + 1
    );

    return pages.length;
  };
  it("should render pagination ", () => {
    const { getByTestId } = render(<Pagination data-testid="pagination" />);
    const el = getByTestId("pagination");
    expect(el).not.toBeNull();
  });

  it("pagination corretcs when 20 movies", () => {
    expect(returnPageLength(20)).toBe(4);
  });

  it("pagination corretcs when 1 movie", () => {
    expect(returnPageLength(1)).toBe(1);
  });

  it("pagination corretcs when 0 movie", () => {
    expect(returnPageLength(0)).toBe(1);
  });

  it("pagination corretcs when 5 movie", () => {
    expect(returnPageLength(5)).toBe(1);
  });

  it("pagination corretcs when 2 movie", () => {
    expect(returnPageLength(8)).toBe(2);
  });
});
