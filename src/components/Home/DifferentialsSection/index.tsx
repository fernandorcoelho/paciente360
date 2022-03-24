import Image from 'next/image';
import {
  Circle1Icon,
  Circle2Icon,
  Circle3Icon
} from '../../../../public/icons/Icons';
import nurseImg from '../../../../public/images/nurse.png';
import { DifferentialsBox } from './DifferentialsBox';

import styles from './styles.module.scss';

export const DifferentialsSection = () => {
  return (
    <section
      className={styles.differentialsSectionWrapper}
      id="fique-por-dentro"
    >
      <div className={styles.differentialsSectionContainer}>
        <span>
          <strong>Diferenciais</strong> da
          <br />
          nossa plataforma
        </span>
        <p>
          Garantimos a aprendizagem de forma prática e interativa,
          <br /> envolvendo todas as etapas da jornada do paciente.
        </p>
        <DifferentialsBox /> {/* Listagem de diferenciais */}
      </div>
      {/* Lado esquerdo com textos */}

      <div className={styles.imageContainer}>
        <Image
          src={nurseImg}
          alt="Enfermeira"
          objectFit="cover"
          className={styles.img}
        />
        <div className={styles.svgs}>
          <Circle1Icon />
          <Circle2Icon />
          <Circle3Icon />
        </div>
      </div>
      {/* Lado direito que contém imagens */}
    </section>
  );
};
