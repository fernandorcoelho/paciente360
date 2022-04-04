import Link from 'next/link';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className={styles.itemBoxContainer}>
      <div>
        {icon} <strong>{title}</strong>
      </div>

      <p>{description}</p>

      <Link href={link}>
        <Button variant="secondary">
          <span>{t('knowMore')}</span>
          <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
};
