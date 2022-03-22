import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset" | undefined;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export const Button = ({
  type = "button",
  children,
  variant = "primary"
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={variant === 'primary' ? styles.primary : styles.secondary}
    >
      {children}
    </button>
  );
}
