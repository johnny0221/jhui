interface JhuiButtonProps {
  children?: React.ReactNode;
}

const JhuiButton = ({ children }: JhuiButtonProps) => {
  return <button className='text-red-500'>{children}</button>;
};

export default JhuiButton;
