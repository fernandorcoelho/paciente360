import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';

import styles from './styles.module.scss';
import Image from 'next/image';

export const PlatformSection = () => {
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
    <section className={styles.platformSectionWrapper} id="solucoes">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.platformSectionContainer}>
        <div className={styles.platformSection}>
          <strong>
            Tecnologia inovadora
            <br />
            para transformar o<br />
            <span>ensino em saúde</span>
          </strong>

          <p>
            Utilizamos o ambiente digital para oferecer uma ferramenta que
            amplia o acesso à educação em saúde, de forma prática, interativa e
            de forma humanizada, com interações da experiência real.
          </p>

          <Button variant="secondary">
            <span>Faça um teste agora mesmo</span>
            <ArrowRightIcon />
          </Button>
        </div>{' '}
        {/* Seção informativa */}
        <SmilingDoctors />
        {/* Imagem dos médicos */}
      </div>
      {/* Container da Sessão */}
    </section>
  );
};
