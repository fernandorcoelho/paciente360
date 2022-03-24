import worldImg from '../../../../public/images/world.png';
import Image from 'next/image';

import styles from './styles.module.scss';
import { TrophyIcon } from '../../../../public/icons/Icons';

export const ContinentsSection = () => {
  return (
    <section className={styles.continentsSectionWrapper} id="casos">
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.continentsSectionContainer}>
        <span>
          Presente em quase todos
          <br />
          os <strong>continentes do mundo</strong>
        </span>

        <div className={styles.dataContainer}>
          <div>
            <strong>
              <span>+</span>600
            </strong>

            <strong>
              Casos
              <br />
              Clínicos
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>800
            </strong>

            <strong>
              Pessoas já
              <br />
              utilizaram
            </strong>
          </div>

          <div>
            <strong>
              <span>+</span>35
            </strong>

            <strong>Especialidades</strong>
          </div>

          <div>
            <strong>
              <span>+</span>00
            </strong>

            <strong>Projetos</strong>
          </div>
        </div>

        <div className={styles.prizeContainer}>
          <TrophyIcon />
          <strong>Prêmio no Congresso Europeu de Cardiologia em Paris</strong>
        </div>
        {/* Imagem do mapa mundi representando continentes */}

        <p>
          Democratizamos o acesso á educação em saúde, possibilitando que
          milhares de pessoas recebam informações de forma acessível e prática.
        </p>
      </div>
      {/* Lado esquerdo */}
      <div className={styles.imageContainer}>
        <Image
          src={worldImg}
          alt="Mapa mundi representando continentes"
          objectFit="cover"
        />
      </div>
      {/* Lado direito */}
    </section>
  );
};
