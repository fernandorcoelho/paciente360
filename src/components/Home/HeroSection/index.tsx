import {
  ArrowRightIcon,
  CircunferenceCircles
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import Typewriter from 'typewriter-effect';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';

import styles from './styles.module.scss';

export const HeroSection = () => {
  const { width } = useWindowDimensions();

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
                  .typeString('CASOS')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
          <span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('INTERATIVOS')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </div>

        <p>
          A{' '}
          <strong>
            única plataforma de <br /> simulação{' '}
          </strong>
          de casos clínicos <br /> com <strong>pessoas reais no mundo</strong>.
        </p>

        <Button variant={width > 425 ? 'secondary' : 'tertiary'}>
          <span>Avalie gratuitamente</span>
          <ArrowRightIcon />
        </Button>
      </div>
      {/* Seção informativa */}
    </main>
  );
};
