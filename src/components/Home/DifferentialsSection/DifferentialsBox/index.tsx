import { ReactNode } from 'react';
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
  const itemBoxArr: ItemBoxProps[] = [
    {
      icon: <UserHeartIcon />,
      title: 'Humanização',
      description:
        'Traz em todas as versões e etapas interações humanizadas entre profisisonais de saúde e pacientes.'
    },
    {
      icon: <JoystickIcon />,
      title: 'Gameficação',
      description:
        '100% adaptado trazendo o mesmo conceito de games com interações completas.'
    },
    {
      icon: <BoltIcon />,
      title: 'Feedback em tempo real',
      description: 'Interação com pacientes recebendo respostas imediatas.'
    },
    {
      icon: <PlayIcon />,
      title: 'Multiplataforma',
      description:
        'Interações em todos os ambientes, possibilitando maior conexão com a realidade.'
    },
    {
      icon: <GlobeIcon />,
      title: 'Treinamentos completos',
      description: 'Interação na discussão em todas as etapas.'
    },
    {
      icon: <ShieldCheckIcon />,
      title: 'Customização',
      description: 'Possibilidade de processos 100% customizados.'
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
