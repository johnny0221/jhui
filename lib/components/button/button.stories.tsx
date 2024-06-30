import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
    size: 'md',
  },
};
