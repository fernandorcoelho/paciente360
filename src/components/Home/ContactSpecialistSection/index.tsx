import Image from 'next/image';
import { ArrowRightIcon, CirclesIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import notebookGif from '../../../../public/gifs/notebook-animation.gif';

import styles from './styles.module.scss';

export const ContactSpecialistSection = () => {
  return (
    <section className={styles.contactSpecialistWrapper} id="contato">
      <div className={styles.gifContainer}>
        <div className={styles.imgContainer}>
          <Image src={notebookGif} alt="Macbook" />
        </div>
        <CirclesIcon />
      </div>
      {/* Lado esquerdo contendo o gif */}

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
      {/* Lado direito contento CTA Button e textos */}
    </section>
  );
};
