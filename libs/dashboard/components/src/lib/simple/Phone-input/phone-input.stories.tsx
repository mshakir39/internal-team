import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PhoneInput } from "./phone-input";

export default {
  component: PhoneInput,
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => (
  <PhoneInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "PhoneInput",
 
};
