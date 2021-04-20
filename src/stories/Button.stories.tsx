import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: 'secondary',
  label: 'Button',
};

export const HighPriority = Template.bind({});
HighPriority.args = {
  priority: 'high',
  label: 'Button',
};

export const MediumPriority = Template.bind({});
MediumPriority.args = {
  priority: 'medium',
  label: 'Button',
};

export const LowPriority = Template.bind({});
LowPriority.args = {
  priority: 'low',
  label: 'Button',
};
