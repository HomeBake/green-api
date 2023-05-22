import styled from 'styled-components';

type Props = {
  variant: TButtonVariantsKeys;
} & React.ComponentPropsWithoutRef<'button'>;

export type TButtonVariants = typeof buttonVariants;

export type TButtonVariantsKeys = keyof TButtonVariants;

export type TButtonVariantsItem = TButtonVariants['outlined'];

const StyledButton = styled.button<{ buttonVariant: TButtonVariantsItem }>(
  ({ buttonVariant }) => ({
    ...buttonVariant,
    '&:active': {
      backgroundColor: buttonVariant.backgroundColorActive,
    },
    '&:disabled': {
      backgroundColor: buttonVariant.backgroundColorDisabled,
    },
  }),
);

export const Button = ({ variant, ...props }: Props) => {
  return (
    <StyledButton
      buttonVariant={buttonVariants[variant]}
      {...props}
    ></StyledButton>
  );
};

const buttonVariants = {
  outlined: {
    color: 'rgb(209, 215, 219)',
    background: 'rgb(42, 57, 66)',
    border: '0px solid',
    borderRadius: '8px',
    height: '32px',
    cursor: 'pointer',
    backgroundColorActive: 'rgb(30, 40, 46)',
    backgroundColorDisabled: 'rgb(40, 45, 47)',
  },
};
