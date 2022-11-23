import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./table";
import { IReactTable } from "./table";
export default {
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: IReactTable) => (
  <Table {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  headers:[
    "Employee Name",
    "Role",
    "Email",
    "Phone Number",
    "Weekly Target Billing Hours",
    "Vacation Day Allowance",
    "Sick Day Allowance",
    "Billing Rate",
    "Cost Rate",
    " ",
  ],
  data: [
    {
      employeeName: "Muzamil",
      role: "Manager",
      email: "mshakir39@gmail.com",
      phoneNumber: "1212-122-1212",
      weeklyTargetBillingHours: "12",
      vacationDayAllowance: "21",
      sickDayAllowance: "21",
      billingRate: "12",
      costRate: "32",
    },
    {
      employeeName: "Muzasasamil",
      role: "Manager",
      email: "mshakir39@gmail.com",
      phoneNumber: "1212-122-1212",
      weeklyTargetBillingHours: "12",
      vacationDayAllowance: "21",
      sickDayAllowance: "21",
      billingRate: "12",
      costRate: "32",
    },
  ],
};
