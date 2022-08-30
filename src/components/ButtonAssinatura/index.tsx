import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset' | undefined;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'download';
  textColor?: string;
  borderColor?: string;
}

export const ButtonAssinatura = ({
  type = 'button',
  children,
  variant = 'primary',
  textColor,
  borderColor = 'primary'
}: ButtonProps) => {
  const buttonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'tertiary':
        return styles.tertiary;
      case 'download':
        return styles.download;
      default:
        return styles.primary;
    }
  };

  return (
    <button
      type={type}
      className={buttonStyle()}
      style={
        textColor && borderColor
          ? {
              border: `1px solid ${borderColor}`,
              color: textColor
            }
          : {}
      }
    >
      {children}
    </button>
  );
};
