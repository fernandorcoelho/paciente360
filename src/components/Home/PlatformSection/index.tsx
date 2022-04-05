import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';

import styles from './styles.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const PlatformSection = () => {
  const { t } = useTranslation();

  // Início: Animação de translate da imagem dos médicos
  const imgVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 200 }
  };

  function SmilingDoctors() {
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
        variants={imgVariants}
        className={styles.imageContainer}
      >
        <Image
          src={smilingDoctorsImg}
          alt="Médico e médica sorrindo"
          objectFit="cover"
        />
      </motion.div>
    );
  }
  // Fim: Animação de translate da imagem dos médicos

  return (
    <section className={styles.platformSectionWrapper} id="plataforma">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.platformSectionContainer}>
        <div className={styles.platformSection}>
          <strong>
            {t('platformHead1')} <span>{t('platformHead2')}</span>
          </strong>

          <p>{t('platformText')}</p>

          <a href="https://app.paciente360.com.br/login">
            <Button variant="secondary">
              <span>{t('tryoutNow')}</span>
              <ArrowRightIcon />
            </Button>
          </a>
        </div>
        {/* Seção informativa */}
        <SmilingDoctors />
        {/* Imagem dos médicos */}
      </div>
      {/* Container da Sessão */}
    </section>
  );
};
