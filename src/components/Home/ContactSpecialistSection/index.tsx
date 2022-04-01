import Image from 'next/image';
import {
  ArrowRightIcon,
  CircunferenceCircles3
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import notebookGif from '../../../../public/gifs/notebook-animation.gif';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

import styles from './styles.module.scss';

export const ContactSpecialistSection = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={styles.contactSpecialistWrapper} id="contato">
      {width !== 0 && width <= 425 && (
        <div className={styles.contactSpecialistContainer}>
          <div>
            <span>
              Fale com um
              <br />
              <strong>especialista</strong>
            </span>
          </div>
        </div>
      )}

      <div className={styles.gifContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={notebookGif}
            alt="Macbook"
            objectFit="contain"
            layout="intrinsic"
            width={width > 425 ? 620 : 350}
            height={width > 425 ? 620 : 350}
            className={styles.gif}
          />
        </div>
        <CircunferenceCircles3 size={width > 425 ? 500 : 260} />
      </div>
      {/* Lado esquerdo contendo o gif */}

      <div className={styles.contactSpecialistContainer}>
        <div>
          {width > 425 && (
            <span>
              Fale com um
              <br />
              <strong>especialista</strong>
            </span>
          )}
          <Button variant="secondary">
            <span>Fale com um especialista agora</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <p>
          E tenha acesso à mais avançada plataforma{' '}
          <strong>de ensino médico do mundo!</strong>
        </p>
      </div>
      {/* Lado direito contento CTA Button e textos */}
    </section>
  );
};
