import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from 'process';
import Dialog from "./dialog";

export default {
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>Children here</Dialog>
);

export const Primary = Template.bind({});
Primary.args = {
  openModal:true,
  title:"Sample Dialog"
};
