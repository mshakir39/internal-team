import { render } from "@testing-library/react";
import TeamMemberForm from "./TeamMemberForm";

describe("Team Member Form", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <TeamMemberForm type="Update" title="Edit Team Form" />
    );

    const title = baseElement.querySelector("h2");

    expect(title?.textContent).toBe("Edit Team Form");
    expect(baseElement).toBeTruthy();
  });
});
