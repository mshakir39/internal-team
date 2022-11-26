import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from 'process';
import { Children } from 'react';
import Dialog from "./dialog";

export default {
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}></Dialog>
);

export const Primary = Template.bind({});
Primary.args = {
  openModal:true,
  title:"",
  type:"Delete",
  Children:""
};
