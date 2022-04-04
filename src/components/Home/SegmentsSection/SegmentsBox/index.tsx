import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HealthIcon,
  MedicalBookIcon,
  ScienceIcon
} from '../../../../../public/icons/Icons';
import { ItemBox } from './ItemBox';

import styles from './styles.module.scss';

type ItemBoxProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const SegmentsBox = () => {
  const { t } = useTranslation();

  const itemBoxArr: ItemBoxProps[] = [
    {
      icon: <MedicalBookIcon />,
      title: t('university'),
      description: t('universityText'),
      link: '#'
    },
    {
      icon: <ScienceIcon />,
      title: t('industry'),
      description: t('industryText'),
      link: '#'
    },
    {
      icon: <HealthIcon />,
      title: t('hospitals'),
      description: t('hospitalsText'),
      link: '#'
    }
  ];

  return (
    <div className={styles.segmentsBoxContainer}>
      {itemBoxArr.map((item) => (
        <ItemBox
          icon={item.icon}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}{' '}
      {/* Cada componente de segmento */}
    </div>
  );
};
