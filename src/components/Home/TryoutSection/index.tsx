import { ArrowRightIcon, WhiteLogo } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import styles from './styles.module.scss';

export const TryoutSection = () => {
  return (
    <div className={styles.tryoutSectionContainer}>
      <WhiteLogo />

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
    </div>
  );
};
