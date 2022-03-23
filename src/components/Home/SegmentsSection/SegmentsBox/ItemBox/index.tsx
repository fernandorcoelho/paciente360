import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRightIcon } from '../../../../../../public/icons/Icons';
import { Button } from '../../../../Button';

import styles from './styles.module.scss';

type ItemBoxProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const ItemBox = ({ icon, title, description, link }: ItemBoxProps) => {
  return (
    <div className={styles.itemBoxContainer}>
      <div>
        {icon} <strong>{title}</strong>
      </div>

      <p>{description}</p>

      <Link href={link}>
        <Button variant="secondary">
          <span>Saiba mais</span>
          <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
}
