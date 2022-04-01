import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import {
  CircunferenceCircles2,
  CircunferenceCircles3
} from '../../../../public/icons/Icons';
import nurseImg from '../../../../public/images/nurse.png';
import { DifferentialsBox } from './DifferentialsBox';

import styles from './styles.module.scss';

export const DifferentialsSection = () => {
  const { width } = useWindowDimensions();

  return (
    <section
      className={styles.differentialsSectionWrapper}
      id="fique-por-dentro"
    >
      {width !== 0 && width <= 768 && (
        <div className={styles.mobileDifferentialsBoxContainer}>
          <DifferentialsBox />
        </div>
      )}

      {width > 768 && (
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
      )}
      {/* Lado esquerdo com textos */}

      <div className={styles.imageContainer}>
        <Image
          src={nurseImg}
          alt="Enfermeira"
          objectFit="cover"
          className={styles.img}
        />
        <div className={styles.svgs}>
          {width > 768 ? <CircunferenceCircles2 /> : <CircunferenceCircles3 />}
        </div>
      </div>
      {/* Lado direito que contém imagens */}

      {width !== 0 && width <= 768 && (
        <div className={styles.differentialsSectionContainer}>
          <span>
            <strong>Diferenciais</strong> da nossa plataforma
          </span>
          <p>
            Garantimos a aprendizagem de forma prática e interativa, envolvendo
            todas as etapas da jornada do paciente.
          </p>
        </div>
      )}
    </section>
  );
};
