import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import worldImg from '../../../../public/images/world.png';
import Image from 'next/image';

import styles from './styles.module.scss';
import { TrophyIcon } from '../../../../public/icons/Icons';
import { useTranslation } from 'react-i18next';

export const ContinentsSection = () => {
  const { t } = useTranslation();

  // Início: Animação de contador
  const counterVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  };

  function DinamicCountUp(end: number) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={counterVariants}
      >
        {inView && <CountUp end={end} duration={2.75} delay={0} />}
      </motion.div>
    );
  }
  // Fim: Animação de contador

  return (
    <section className={styles.continentsSectionWrapper}>
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.continentsSectionContainer}>
        <span>
          {t('continentsHead1')} <strong>{t('continentsHead2')}</strong>
        </span>

        <div className={styles.dataContainer}>
          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(600)}
            </strong>

            <strong>
              {t('cases1')}
              <br />
              {t('cases2')}
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(20000)}
            </strong>

            <strong>
              {t('people1')}
              <br />
              {t('people2')}
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(35)}
            </strong>

            <strong>{t('specialties')}</strong>
          </div>

          <div>
            <strong>
              <span>+</span>00
            </strong>

            <strong>{t('projects')}</strong>
          </div>
        </div>

        <p>{t('continentsText')}</p>
      </div>
      {/* Lado esquerdo */}
      <div className={styles.imageContainer}>
        <Image
          src={worldImg}
          alt="Mapa mundi representando continentes"
          objectFit="cover"
        />
      </div>
      {/* Imagem do mapa mundi representando continentes */}
      {/* Lado direito */}
    </section>
  );
};
