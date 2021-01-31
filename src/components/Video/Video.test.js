import React from "react";
import { render } from "@testing-library/react";
import Video from "./Video";

describe("Video component", () => {
  it("should render Video ", () => {
    const { getByTestId } = render(<Video data-testid="video" />);
    const el = getByTestId("video");
    expect(el).not.toBeNull();
  });
});
