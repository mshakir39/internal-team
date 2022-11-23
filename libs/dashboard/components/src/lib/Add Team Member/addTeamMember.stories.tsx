import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddTeamMember } from "./addTeamMember";

export default {
  component: AddTeamMember,
} as ComponentMeta<typeof AddTeamMember>;

const Template: ComponentStory<typeof AddTeamMember> = (args) => (
  <AddTeamMember {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
