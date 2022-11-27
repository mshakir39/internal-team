import {  render } from "@testing-library/react";

import InternalTeam from "./internalTeam";

describe("Internal Team", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<InternalTeam />);
    expect(baseElement).toBeTruthy();
  });
  it("render all Children Properly", () => {
    const { getByTestId, baseElement } = render(<InternalTeam />);
    const accordion = getByTestId("accordion-testId");
    const accordionIcon = baseElement.querySelector("svg");
    const accordionChildren = getByTestId("accordion-children");
    const fabButton = getByTestId("fab-button-testId");
    expect(accordion).toBeTruthy();
    expect(accordionChildren).toBeTruthy();
    expect(accordionIcon?.childElementCount).toBe(2);
    expect(fabButton).toBeTruthy();
  });
});
