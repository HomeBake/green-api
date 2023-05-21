type Props = {} & React.ComponentPropsWithoutRef<'button'>;

export const Button = ({ ...props }: Props) => {
  return <button {...props}></button>;
};
