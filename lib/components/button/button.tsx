import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import {
  Button as RAButton,
  ButtonProps as RAButtonProps,
} from 'react-aria-components';

interface JhuiButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'info' | 'danger';
  style?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonProps = JhuiButtonProps &
  VariantProps<typeof buttonStyles> &
  RAButtonProps;

// TODO: remember to add icon support later
const buttonStyles = cva(['focus:outline-none', 'rounded-full', 'font-bold'], {
  variants: {
    variant: {
      primary: [],
      secondary: [],
      info: [],
      danger: [],
    },
    style: {
      filled: [],
      outlined: [],
    },
    size: {
      sm: ['px-3', 'py-1'],
      md: ['px-4', 'py-2'],
      lg: ['px-5', 'py-3'],
    },
    disabled: {
      true: ['opacity-30', 'cursor-not-allowed'],
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      style: 'filled',
      class: ['bg-black', 'text-white'],
    },
    {
      variant: 'primary',
      style: 'outlined',
      class: ['border-2', 'border-black', 'text-black'],
    },
    {
      variant: 'secondary',
      style: 'filled',
      class: ['bg-gray-500', 'text-white'],
    },
    {
      variant: 'secondary',
      style: 'outlined',
      class: ['border-2', 'border-gray-500', 'text-gray-500'],
    },
    {
      variant: 'info',
      style: 'filled',
      class: ['bg-blue-500', 'text-white'],
    },
    {
      variant: 'info',
      style: 'outlined',
      class: ['border-2', 'border-blue-500', 'text-blue-500'],
    },
    {
      variant: 'danger',
      style: 'filled',
      class: ['bg-red-600', 'text-white'],
    },
    {
      variant: 'danger',
      style: 'outlined',
      class: ['border-2', 'border-red-600', 'text-red-600'],
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    style: 'filled',
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      style = 'filled',
      size = 'md',
      disabled = false,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <RAButton
        ref={ref}
        className={cn(
          buttonStyles({ variant: variant, size: size, style, disabled })
        )}
        isDisabled={disabled}
        {...props}>
        {children}
      </RAButton>
    );
  }
);

export default Button;
