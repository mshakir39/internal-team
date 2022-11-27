import { render } from "@testing-library/react";

import PhoneInput from "./phone-input";

describe("PhoneInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <PhoneInput label="PhoneInput Instance" dataTestId="test-instance" name='PhoneInput' />
    );
    expect(baseElement).toBeTruthy();
  });
});
