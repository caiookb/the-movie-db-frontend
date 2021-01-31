import React from "react";
import { render } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag component", () => {
  it("should render Tag ", () => {
    const { getByTestId } = render(<Tag data-testid="tag" />);
    const el = getByTestId("tag");
    expect(el).not.toBeNull();
  });
});
