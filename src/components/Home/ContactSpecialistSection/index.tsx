import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import styles from './styles.module.scss';

export const ContactSpecialistSection = () => {
  return (
    <div className={styles.contactSpecialistWrapper}>
      <div className={styles.videoContainer}>
        {/* <iframe
          frameBorder={0}
          allowFullScreen
          allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
          src="https://youtube.com/embed/qXC4AyjRikg?playlist=qXC4AyjRikg&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&mute=1&modestbranding=1&rel=0"
        /> */}
        {/* <div className={styles.svgs}>
          <Circle1Icon />
          <Circle2Icon />
          <Circle3Icon />
        </div> */}
      </div>

      <div className={styles.contactSpecialistContainer}>
        <div>
          <span>
            Fale com um
            <br />
            <strong>especialista</strong>
          </span>
          <Button variant="secondary">
            <span>Fale com um especialista agora</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <p>
          E tenha acesso à mais
          <br />
          avançada plataforma
          <br />
          <strong>
            de ensino médico
            <br />
            do mundo!
          </strong>
        </p>
      </div>
    </div>
  );
};
