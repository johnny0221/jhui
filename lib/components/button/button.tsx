interface JhuiButtonProps {
  children?: React.ReactNode;
}

const JhuiButton = ({ children, ...props }: JhuiButtonProps) => {
  return (
    <button className='text-red-500' {...props}>
      {children}
    </button>
  );
};

export default JhuiButton;
