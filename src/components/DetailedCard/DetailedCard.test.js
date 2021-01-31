import React from "react";
import { render } from "@testing-library/react";
import DetailedCard from "./DetailedCard";

describe("DetailedCard component", () => {
  it("should render DetailedCard ", () => {
    const { getByTestId } = render(
      <DetailedCard
        data-testid="detailed-card"
        movie={{ title: "Harry Potter" }}
      />
    );
    const el = getByTestId("detailed-card");
    expect(el).not.toBeNull();
  });
});
