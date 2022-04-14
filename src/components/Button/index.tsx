import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset' | undefined;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'download';
}

export const Button = ({
  type = 'button',
  children,
  variant = 'primary'
}: ButtonProps) => {
  const buttonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'download':
        return styles.download;
      default:
        return styles.primary;
    }
  };

  return (
    <button type={type} className={buttonStyle()}>
      {children}
    </button>
  );
};
