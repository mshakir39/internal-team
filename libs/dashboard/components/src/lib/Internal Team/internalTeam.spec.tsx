import { act, fireEvent, render } from "@testing-library/react";

import AddTeamMember from "./internalTeam";

describe("AcceptButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AddTeamMember />);
    expect(baseElement).toBeTruthy();
  });
  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <AddTeamMember
   
      />
    );
  });
 

});
