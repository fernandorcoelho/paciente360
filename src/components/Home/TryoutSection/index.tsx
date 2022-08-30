import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import whiteLogoImg from '../../../../public/images/white-logo.png';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';

export const TryoutSection = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  // Início: Animação de opacidade ao carregar a página
  const appVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: width > 768 ? 200 : -200 }
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
          {t('tryoutHead1')} <strong>{t('tryoutHead2')}</strong>{' '}
          {t('tryoutHead3')}
        </span>

        <Button variant="secondary">
          <Link href="/contato">
            <span>{t('tryoutForFree')}</span>
          </Link>
          <ArrowRightIcon />
        </Button>
      </motion.div>
    );
  }
  // Fim: Animação de opacidade ao carregar a página

  return (
    <section className={styles.tryoutSectionContainer} id="denise">
      <div className={styles.imgContainer}>
        <Image
          src={whiteLogoImg}
          alt="Logo branca"
          objectFit="contain"
          layout="intrinsic"
          width={150}
        />
      </div>

      <TryoutCTA />
      {/* Lado direito */}
    </section>
  );
};
