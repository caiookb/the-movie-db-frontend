import React from "react";
import { render } from "@testing-library/react";
import RoundedData from "./RoundedData";

describe("RoundedData component", () => {
  it("should render RoundedData ", () => {
    const { getByTestId } = render(<RoundedData data-testid="rounded-data" />);
    const el = getByTestId("rounded-data");
    expect(el).not.toBeNull();
  });
});
