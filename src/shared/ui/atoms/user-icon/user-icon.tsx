import { styled } from 'styled-components';

type Props = {
  img: string;
  size?: string;
};

const DEFAULT_SIZE = '42px';

const StyledImage = styled.img<{ size?: string }>(
  ({ size = DEFAULT_SIZE }) => ({
    borderRadius: size,
    height: size,
    width: size,
  }),
);

export const UserIcon = ({ img, size }: Props) => {
  return <StyledImage src={img} alt="avatar img" size={size}></StyledImage>;
};
