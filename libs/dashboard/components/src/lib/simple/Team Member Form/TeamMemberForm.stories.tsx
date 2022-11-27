import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TeamMemberForm } from "./TeamMemberForm";

export default {
  component: TeamMemberForm,
} as ComponentMeta<typeof TeamMemberForm>;

const Template: ComponentStory<typeof TeamMemberForm> = (args) => (
  <TeamMemberForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
 title:"Add Team Member"
};
