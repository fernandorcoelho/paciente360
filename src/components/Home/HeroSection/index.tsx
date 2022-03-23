import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import styles from './styles.module.scss';

export const HeroSection = () => {
  return (
    <main className={styles.heroSectionContainer}>
      <div className={styles.linearGradientBg}></div>
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
        <div>
          <span>CASOS</span>
          <span>INTERATIVOS</span>
        </div>

        <p>
          A
          <strong>
            única plataforma de <br /> simulação
          </strong>
          de casos clínicos <br /> com <strong>pessoas reais no mundo</strong>.
        </p>

        <Button variant="secondary">
          <span>Avalie gratuitamente</span>
          <ArrowRightIcon />
        </Button>
      </div>
      {/* Seção informativa */}
    </main>
  );
};
