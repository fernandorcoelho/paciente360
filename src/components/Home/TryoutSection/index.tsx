import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import whiteLogoImg from '../../../../public/images/white-logo.png';

import styles from './styles.module.scss';

export const TryoutSection = () => {
  // Início: Animação de opacidade ao carregar a página
  const appVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 200 }
  };

  function TryoutCTA() {
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
        variants={appVariants}
        className={styles.tryoutSection}
      >
        <span>
          Projetamos <strong>simulações de cenários clínicos</strong>, afim de
          permitir a interação, em um ambiente seguro e realista.
        </span>

        <Button variant="secondary">
          <span>Avalie gratuitamente</span>
          <ArrowRightIcon />
        </Button>
      </motion.div>
    );
  }
  // Fim: Animação de opacidade ao carregar a página

  return (
    <section className={styles.tryoutSectionContainer} id="para-quem">
      <div className={styles.imgContainer}>
        <Image src={whiteLogoImg} alt="Logo branca" objectFit="cover" />
      </div>

      <TryoutCTA />
      {/* Lado direito */}
    </section>
  );
};
