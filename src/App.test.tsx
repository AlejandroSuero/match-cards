import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@/App";

describe("App", () => {
  it("Renders title: 'CHIBI MATCH-UP MADNESS'", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveTextContent("CHIBI MATCH-UP MADNESS");
  });
});
