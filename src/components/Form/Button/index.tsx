import { forwardRef } from 'react';

import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'subscription';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, variant = 'primary', ...rest }: ButtonProps, ref) => {
  return (
    <S.Button ref={ref} variant={variant} {...rest}>
      {children}
    </S.Button>
  );
};

export const Button = forwardRef(ButtonBase);
