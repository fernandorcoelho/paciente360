import { useTranslation } from 'react-i18next';
import { SegmentsBox } from './SegmentsBox';

import styles from './styles.module.scss';

export const SegmentsSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.segmentsSectionContainer} id="para-quem">
      <div className={styles.segmentsSection}>
        <span>
          {t('casesHead1')} <strong>{t('casesHead2')}</strong>
        </span>
        <p>{t('casesText')}.</p>
        <SegmentsBox /> {/* Componentes dos segmentos */}
      </div>
    </section>
  );
};
