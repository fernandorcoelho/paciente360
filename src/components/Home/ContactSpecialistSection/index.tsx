import Image from 'next/image';
import {
  ArrowRightIcon,
  CircunferenceCircles3
} from '../../../../public/icons/Icons';
import { Button } from '../../Button';
import notebookGif from '../../../../public/gifs/notebook-animation.gif';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const ContactSpecialistSection = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

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
            src={notebookGif}
            alt="Macbook"
            objectFit="contain"
            layout="intrinsic"
            width={width > 768 ? 620 : 350}
            height={width > 768 ? 620 : 350}
            className={styles.gif}
          />
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
          <Button variant="secondary">
            <span>{t('talkToExpertNow')}</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <p>
          {t('specialistText1')} <strong>{t('specialistText2')}</strong>
        </p>
      </div>
      {/* Lado direito contento CTA Button e textos */}
    </section>
  );
};
