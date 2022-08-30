import styled, { css } from 'styled-components';

type VariantProps = {
  variant: 'primary' | 'secondary' | 'subscription';
};

export const Button = styled.button<VariantProps>`
  padding: 0 1rem;
  border: none;
  width: fit-content;

  ${({ variant }) => css`
    ${variant !== 'secondary' &&
    css`
      border-radius: 4px;
      height: 2.5rem;
      gap: 0.5rem;

      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.125rem;
    `}

    ${variant === 'primary' &&
    css`
      background-color: var(--red-500);
      color: var(--white);

      &:hover {
        filter: brightness(0.97);
      }
    `}


    ${variant === 'subscription' &&
    css`
      background-color: transparent;
      color: var(--red-500);
      border: 1px solid var(--red-500);

      &:hover {
        background-color: var(--red-500);
        color: var(--white);
      }
    `}

    ${variant === 'secondary' &&
    css`
      background-color: transparent;
      color: var(--gray-500);
      border: 1px solid var(--red-500);
      border-radius: 6px;
      height: 3rem;
      gap: 1.75rem;

      font-weight: 700;
      font-size: 1rem;
      line-height: 1.313rem;
    `}
  `}
`;
