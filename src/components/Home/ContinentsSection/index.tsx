import worldImg from '../../../../public/images/world.png';
import Image from 'next/image';

import styles from './styles.module.scss';

export const ContinentsSection = () => {
  return (
    <div className={styles.continentsSectionWrapper}>
      <div className={styles.linearGradientBg} /> {/* Linear Gradient Background */}

      <div className={styles.continentsSectionContainer}>

      </div>

      <div className={styles.imageContainer}>
        <Image
          src={worldImg}
          alt="Mapa mundi representando continentes"
          objectFit="cover"
        />
      </div>
    </div>
  );
}