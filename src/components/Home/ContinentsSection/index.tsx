import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import worldImg from '../../../../public/images/world.png';
import Image from 'next/image';

import styles from './styles.module.scss';
import { TrophyIcon } from '../../../../public/icons/Icons';

export const ContinentsSection = () => {
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
    <section className={styles.continentsSectionWrapper} id="casos">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.continentsSectionContainer}>
        <span>
          Presente em quase todos os <strong>continentes do mundo</strong>
        </span>

        <div className={styles.dataContainer}>
          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(600)}
            </strong>

            <strong>
              Casos
              <br />
              Clínicos
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(20000)}
            </strong>

            <strong>
              Pessoas
              <br />
              utilizam
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>
              {DinamicCountUp(35)}
            </strong>

            <strong>Especialidades</strong>
          </div>

          <div>
            <strong>
              <span>+</span>00
            </strong>

            <strong>Projetos</strong>
          </div>
        </div>

        <p>
          Democratizamos o acesso á educação em saúde, possibilitando que
          milhares de pessoas recebam informações de forma acessível e prática.
        </p>
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
