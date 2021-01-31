import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("card component", () => {
  it("should render card ", () => {
    const { getByTestId } = render(
      <Card data-testid="card" movie={{ title: "Harry Potter" }} />
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });
});
