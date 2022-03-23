import { ArrowRightIcon } from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import smilingDoctorsImg from '../../../../public/images/smiling_doctors.png';

import styles from './styles.module.scss';
import Image from 'next/image';

export const PlatformSection = () => {
  return (
    <div className={styles.platformSectionWrapper}>
      <div className={styles.linearGradientBg} />
      {/* Linear Gradient Background */}
      <div className={styles.platformSectionContainer}>
        <div className={styles.platformSection}>
          <strong>
            Tecnologia inovadora
            <br />
            para transformar o<br />
            <span>ensino em saúde</span>
          </strong>

          <p>
            Utilizamos o ambiente digital para oferecer uma ferramenta que
            amplia o acesso à educação em saúde, de forma prática, interativa e
            de forma humanizada, com interações da experiência real.
          </p>

          <Button variant="secondary">
            <span>Faça um teste agora mesmo</span>
            <ArrowRightIcon />
          </Button>
        </div>{' '}
        {/* Seção informativa */}
        <div className={styles.imageContainer}>
          <Image
            src={smilingDoctorsImg}
            alt="Médico e médica sorrindo"
            objectFit="cover"
          />
        </div>
        {/* Imagem dos médicos */}
      </div>
      {/* Container da Sessão */}
    </div>
  );
};
