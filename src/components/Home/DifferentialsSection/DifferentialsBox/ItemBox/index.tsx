import { ReactNode } from 'react';

import styles from './styles.module.scss';

type ItemBoxProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ItemBox = ({ icon, title, description }: ItemBoxProps) => {
  return (
    <div className={styles.itemBoxContainer}>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};
