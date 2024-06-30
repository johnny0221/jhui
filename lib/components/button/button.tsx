import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

interface JhuiButtonProps {
  children?: React.ReactNode;
}

type ButtonProps = JhuiButtonProps & VariantProps<typeof buttonStyles>;

const buttonStyles = cva(
  ['text-blue-500', 'focus:outline-none', 'rounded-md'],
  {
    variants: {
      color: {
        primary: ['bg-blue-500', 'text-white'],
        secondary: ['bg-gray-200', 'text-gray-800'],
      },
      size: {
        sm: ['px-2', 'py-1'],
        md: ['px-3', 'py-2'],
        lg: ['px-4', 'py-3'],
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
);

const JhuiButton = ({ children, color, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ color: color, size: size }))}
      {...props}>
      {children}
    </button>
  );
};

export default JhuiButton;
