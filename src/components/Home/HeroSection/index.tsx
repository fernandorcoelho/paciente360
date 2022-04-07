import { useState } from 'react';
import {
  ArrowRightIcon,
  CircunferenceCircles
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';
import { useTranslation } from 'react-i18next';

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

  return (
    <main className={styles.heroSectionContainer} id="solucoes">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.videoContainer}>
        <iframe
          frameBorder={0}
          allowFullScreen
          allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
          src="https://youtube.com/embed/fBdM0U1KarI?playlist=fBdM0U1KarI&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&mute=1&modestbranding=1&rel=0"
        />
      </div>
      {/* Video tocando no BG */}
      <div className={styles.heroSection}>
        <div className={styles.mobileImgContainer}>
          <Image src={smilingDoctorsImg} objectFit="cover" />
          <CircunferenceCircles size={320} />
        </div>

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
          <Button variant={width > 768 ? 'secondary' : 'tertiary'}>
            <span>{t('tryoutForFree')}</span>
            <ArrowRightIcon />
          </Button>
        </a>
      </div>
      {/* Seção informativa */}
    </main>
  );
};
