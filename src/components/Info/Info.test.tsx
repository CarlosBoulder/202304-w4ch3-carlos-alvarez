import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Calling...'", () => {
      const expectedText = "Calling...";

      render(<Info />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
