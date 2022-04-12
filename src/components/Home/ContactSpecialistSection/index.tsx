import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRightIcon,
  CircunferenceCircles3
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';
import macbookImg from '../../../../public/images/macbook.png';

import styles from './styles.module.scss';

export const ContactSpecialistSection = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);

  const handleNotebookVideoSrc = () => {
    switch (i18n.language) {
      case 'pt-BR':
        return '/videos/specialist-pt.mp4';
      case 'en':
        return '/videos/specialist-en.mp4';
      case 'es':
        return '/videos/specialist-es.mp4';
      default:
        return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <section className={styles.contactSpecialistWrapper} id="contato">
      {width !== 0 && width <= 768 && (
        <div className={styles.contactSpecialistContainer}>
          <div>
            <span>
              Fale com um <strong>especialista</strong>
            </span>
          </div>
        </div>
      )}

      <div className={styles.gifContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={macbookImg}
            alt="Macbook"
            objectFit="contain"
            layout="intrinsic"
            width={width > 768 ? 620 : 350}
            height={width > 768 ? 620 : 350}
            className={styles.gif}
          />
          {!loading && (
            <video
              autoPlay
              muted
              loop
              className={styles.video}
              width={width > 768 ? 500 : width >= 375 ? 240 : 220}
              height={width > 768 ? 500 : width >= 375 ? 240 : 220}
            >
              <source src={handleNotebookVideoSrc()} type="video/mp4" />
            </video>
          )}
        </div>
        <CircunferenceCircles3 size={width > 768 ? 500 : 260} />
      </div>
      {/* Lado esquerdo contendo o gif */}

      <div className={styles.contactSpecialistContainer}>
        <div>
          {width > 768 && (
            <span>
              {t('specialistHead1')} <strong>{t('specialistHead2')}</strong>
            </span>
          )}
          <a href="https://conteudo.paciente360.com.br/contato">
            <Button variant="secondary">
              <span>{t('talkToExpertNow')}</span>
              <ArrowRightIcon />
            </Button>
          </a>
        </div>

        <p>
          {t('specialistText1')} <strong>{t('specialistText2')}</strong>
        </p>
      </div>
      {/* Lado direito contento CTA Button e textos */}
    </section>
  );
};
