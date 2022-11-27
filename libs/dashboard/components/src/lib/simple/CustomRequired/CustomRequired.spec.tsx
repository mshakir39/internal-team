import { render } from "@testing-library/react";

import CustomRequired from "./CustomRequired";

describe("Custom Required", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CustomRequired />);
    expect(baseElement).toBeTruthy();
  });
});
