import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomRequired } from "./CustomRequired";
import PhoneInput from "../Phone-input/phone-input";
export default {
  component: CustomRequired,
} as ComponentMeta<typeof CustomRequired>;

const Template: ComponentStory<typeof CustomRequired> = (args) => {
  const [value, setValue] = useState<string>("");
  const [submit, setSubmit] = useState<string>("");
  const [withOutCR, setWithOutCR] = useState<boolean>(false);

  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  const onCheckBoxClick = (event: any) => {
    setWithOutCR(!withOutCR);
    if(!withOutCR===false)
    {
      setSubmit("");

    }
  };

  useEffect(() => {
    if (value.length < 17) {
      setSubmit("");
    }
  }, [value]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit("submitted");
  };
  return (
    <form onSubmit={onSubmit} data-testid="form-testid">
      {!withOutCR && (
        <CustomRequired
          {...args}
          requiredCondition={value.length <= 17}
          value={value.length < 17 ? "" : value}
        >
          <PhoneInput
            name="Test Phone Number Input"
            dataTestId="phoneInput-testId"
            onChange={onChangeInput}
            value={value}
          />
        </CustomRequired>
      )}

      {withOutCR && (
        <PhoneInput
          name="Test Phone Number Input"
          dataTestId="phoneInput-testId"
          onChange={onChangeInput}
          value={value}
        />
      )}

      <label>Without Custom Required</label>
      <input
        type="checkbox"
        onChange={(e) => onCheckBoxClick(e)}
        checked={withOutCR}
        data-testid="withoutCR-checkbox-testId"
      ></input>
      <button> Save</button>

      <h2 data-testid="isSubmit-testid">{submit}</h2>
    </form>
  );
};
export const Primary = Template.bind({});
Primary.args = {};
