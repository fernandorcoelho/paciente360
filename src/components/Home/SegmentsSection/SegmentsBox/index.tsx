import {
  HealthIcon,
  MedicalBookIcon,
  ScienceIcon
} from '../../../../../public/icons/Icons';
import { ItemBox } from './ItemBox';

import styles from './styles.module.scss';

export const SegmentsBox = () => {
  const itemBoxArr = [
    {
      icon: <MedicalBookIcon />,
      title: 'Universidade',
      description: 'No ambiente universitário, provocamos uma verdadeira revolução no ensino da medicina e outros cursos da saúde ao utilizar o ambiente digital para unir teoria e prática. A plataforma garante a aprendizagem com base na realidade desde o início do curso de graduação.',
      link: '#'
    },
    {
      icon: <ScienceIcon />,
      title: 'Indústria farmacêutica',
      description: 'Ilustramos o uso de medicamentos de forma customizada, com divulgação das informações científicas e apresentação de casos clínicos, mostrando a correta utilização de cada um deles.',
      link: '#'
    },
    {
      icon: <HealthIcon />,
      title: 'Hospitais',
      description: 'Para hospitais, temos uma solução versátil e capaz de incorporar novos conteúdos com rapidez. A plataforma faz uso do meio digital para simular todas as etapas do atendimento em saúde de forma humanizada, oferecendo a hospitais a possibilidade de treinar equipes em escala.',
      link: '#'
    },
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
      ))} {/* Cada componente de segmento */}
    </div>
  );
}