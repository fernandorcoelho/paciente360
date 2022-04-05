import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  CircunferenceCircles2,
  CircunferenceCircles3
} from '../../../../public/icons/Icons';
import nurseImg from '../../../../public/images/nurse.png';
import { DifferentialsBox } from './DifferentialsBox';

import styles from './styles.module.scss';

export const DifferentialsSection = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  return (
    <section className={styles.differentialsSectionWrapper}>
      {width !== 0 && width <= 768 && (
        <div className={styles.mobileDifferentialsBoxContainer}>
          <DifferentialsBox />
        </div>
      )}

      {width > 768 && (
        <div className={styles.differentialsSectionContainer}>
          <span>
            <strong>{t('differentialsHead1')}</strong> {t('differentialsHead2')}
          </span>
          <p>{t('differentialsText')}</p>
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
            <strong>{t('differentialsHead1')}</strong> {t('differentialsHead2')}
          </span>
          <p>{t('differentialsText')}</p>
        </div>
      )}
    </section>
  );
};
