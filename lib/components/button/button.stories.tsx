import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    variant: 'primary',
    style: 'filled',
    size: 'md',
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'info', 'danger'],
      control: { type: 'radio' },
      description: 'The variant of the button, decides the color scheme',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      description: 'The size of the button, decides the padding and font size',
    },
    style: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
      description:
        'The style of the button, decides the background and text color',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    children: 'Button',
    variant: 'info',
    size: 'md',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
    size: 'md',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    size: 'md',
    style: 'outlined',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
