import { useState } from 'react';
import {
  ArrowRightIcon,
  CircunferenceCircles
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import Typewriter from 'typewriter-effect';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();

  const firstTextElArr = [
    t('casosClinicos'),
    t('comportamentos'),
    t('pacientes')
  ];

  const [textElContent, setTextElContent] = useState('');

  const handleTypewriter = (i: number) => {
    if (i === 1) {
      setTextElContent(t('interativos'));
    } else if (i === 2) {
      setTextElContent(t('reais'));
    } else if (i === 3) {
      setTextElContent(t('humanizados'));
    }
  };

  return (
    <main className={styles.heroSectionContainer} id="hero">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.videoContainer}>
        <iframe
          frameBorder={0}
          allowFullScreen
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
          src="https://youtube.com/embed/qXC4AyjRikg?playlist=qXC4AyjRikg&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&mute=1&modestbranding=1&rel=0"
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
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => handleTypewriter(1))
                  .typeString(firstTextElArr[0])
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
                  .callFunction(() => handleTypewriter(2))
                  .typeString(firstTextElArr[1])
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
                  .callFunction(() => handleTypewriter(3))
                  .typeString(firstTextElArr[2])
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
          {/* Typewriter */}
          <span>{textElContent}</span> {/* Texto à direita dinâmico */}
        </div>

        <p>
          {t('heroText1')} <strong>{t('heroText2')}</strong> {t('heroText3')}{' '}
          <strong>{t('heroText4')}</strong>.
        </p>

        <Button variant={width > 768 ? 'secondary' : 'tertiary'}>
          <span>{t('tryoutForFree')}</span>
          <ArrowRightIcon />
        </Button>
      </div>
      {/* Seção informativa */}
    </main>
  );
};
