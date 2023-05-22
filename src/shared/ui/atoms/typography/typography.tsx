import { ReactNode } from 'react';
import styled from 'styled-components';

export type TTypography = Omit<typeof typography, 'allVariants'>;

export type TTypographyItem = {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  textTransform?: string;
};

type Props = {
  children: ReactNode;
  variant: keyof TTypography;
  color?: string;
};

const Wrapper = styled.div<{ typographyStyle: TTypographyItem; color: string }>(
  ({ typographyStyle, color }) => ({
    color,
    fontFamily: typography.allVariants.fontFamily,
    ...typographyStyle,
  }),
);

export const Typography = ({ children, variant, color }: Props) => {
  return (
    <Wrapper
      color={color ? color : typography.allVariants.color}
      typographyStyle={typography[variant]}
    >
      {children}
    </Wrapper>
  );
};

export const typography = {
  allVariants: {
    color: '#e9edef',
    fontFamily: 'SF Pro Display',
    lineHeight: '10px',
  },
  h1: {
    fontWeight: 800,
    fontSize: '42px',
    lineHeight: '56px',
  },
  h2: {
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '56px',
  },
  h3: {
    fontWeight: 800,
    fontSize: '28px',
    lineHeight: '36px',
  },
  h4: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '32px',
  },
  h5: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
  },
  h6: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '21px',
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
  },
  body1: {
    fontWeight: 500,
    fontSize: '17px',
    lineHeight: '24px',
  },
  body2: {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '20px',
  },
  button: {
    fontWeight: 800,
    fontSize: '18px',
    lineHeight: '24px',
    textTransform: 'none',
  },
  caption: {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '15px',
  },
  overline: {
    fontWeight: 800,
    fontSize: '9px',
    lineHeight: '12px',
    textTransform: 'none',
  },
};
