import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRightIcon,
  CircunferenceCircles
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import smilingDoctorsImg from '../../../../public/images/smiling-doctors.png';

import styles from './styles.module.scss';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();

  const [textElContent, setTextElContent] = useState('');

  const handleChangeSecondText = (i: number) => {
    if (i === 0) {
      setTextElContent(t('interativos'));
    } else if (i === 1) {
      setTextElContent(t('reais'));
    } else if (i === 2) {
      setTextElContent(t('humanizados'));
    }
  };

  const handleTypewriterSettings = (typewriter: TypewriterClass) => {
    typewriter
      .callFunction(() => handleChangeSecondText(0))
      .typeString(t('casosClinicos'))
      .pauseFor(2500)
      .deleteAll()
      .start()
      .callFunction(() => handleChangeSecondText(1))
      .typeString(t('comportamentos'))
      .pauseFor(2500)
      .deleteAll()
      .start()
      .callFunction(() => handleChangeSecondText(2))
      .typeString(t('pacientes'))
      .pauseFor(2500)
      .deleteAll()
      .start();
  };

  i18n.on('languageChanged', function (lng) {
    if (typeof window !== undefined) window.location.reload();
  });

  return (
    <main className={styles.heroSectionContainer} id="solucoes">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Video tocando no BG */}
      <div className={styles.heroSection}>
        <div className={styles.typewriterContainer}>
          <span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => handleTypewriterSettings(typewriter)}
            />
          </span>
          {/* Typewriter */}
          <span>{textElContent}</span> {/* Texto à direita dinâmico */}
        </div>

        <p>
          {t('heroText1')} <strong>{t('heroText2')}</strong> {t('heroText3')}{' '}
          <strong>{t('heroText4')}</strong>.
        </p>

        <a href="https://app.paciente360.com.br/login">
          <Button variant="secondary">
            <span>{t('tryoutForFree')}</span>
            <ArrowRightIcon />
          </Button>
        </a>
      </div>
      {/* Seção informativa */}
    </main>
  );
};
