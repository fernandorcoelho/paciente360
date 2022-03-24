import Image from 'next/image';
import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import whiteLogoImg from '../../../../public/images/white-logo.png';

import styles from './styles.module.scss';

export const TryoutSection = () => {
  return (
    <section className={styles.tryoutSectionContainer} id="para-quem">
      <div className={styles.imgContainer}>
        <Image src={whiteLogoImg} alt="Logo branca" objectFit="cover" />
      </div>

      <div className={styles.tryoutSection}>
        <span>
          Projetamos <strong>simulações de cenários clínicos</strong>, afim de
          permitir que alunos integrajam com pacientes reais (padronizados), em
          um ambiente seguro e realista.
        </span>

        <Button variant="secondary">
          <span>Avalie gratuitamente</span>
          <ArrowRightIcon />
        </Button>
      </div>
      {/* Lado direito */}
    </section>
  );
};
