import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Navbar, props } from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

const Template: Story<props> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  brandName: "Resume"
}

