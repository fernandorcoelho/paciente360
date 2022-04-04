import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BoltIcon,
  GlobeIcon,
  JoystickIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserHeartIcon
} from '../../../../../public/icons/Icons';
import { ItemBox } from './ItemBox';

import styles from './styles.module.scss';

type ItemBoxProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const DifferentialsBox = () => {
  const { t } = useTranslation();

  const itemBoxArr: ItemBoxProps[] = [
    {
      icon: <UserHeartIcon />,
      title: t('humanization'),
      description: t('humanizationText')
    },
    {
      icon: <JoystickIcon />,
      title: t('gamefication'),
      description: t('gameficationText')
    },
    {
      icon: <BoltIcon />,
      title: t('feedback'),
      description: t('feedbackText')
    },
    {
      icon: <PlayIcon />,
      title: t('multiplataform'),
      description: t('multiplataformText')
    },
    {
      icon: <GlobeIcon />,
      title: t('training'),
      description: t('trainingText')
    },
    {
      icon: <ShieldCheckIcon />,
      title: t('customization'),
      description: t('customizationText')
    }
  ];

  return (
    <div className={styles.differentialsBoxContainer}>
      {itemBoxArr.map((item) => (
        <ItemBox
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
