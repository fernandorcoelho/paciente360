import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import styles from './styles.module.scss';

import { ArrowRight } from 'assets/icons/Icons';
import { Button } from 'components/Form/Button';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <video autoPlay muted loop>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.messageContainer}>
        <h1 className={styles.heading}>
          {t('home.technology.heading.text1')}{' '}
          <strong>{t('home.technology.heading.text2')}</strong>
        </h1>
        <p className={styles.text}>{t('home.technology.description')}</p>
        <Link href="/contato">
          <button className={styles.button}>
            {t('button.test')} <ArrowRight />
          </button>
        </Link>
      </div>

      <div className={styles.linearGradient}></div>
    </div>
  );
};
