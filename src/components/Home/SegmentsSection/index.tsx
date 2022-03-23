import { SegmentsBox } from './SegmentsBox';
import styles from './styles.module.scss';

export const SegmentsSection = () => {
  return (
    <div className={styles.segmentsSectionContainer}>
      <div className={styles.segmentsSection}>
        <span>
          Somos a maior<br />biblioteca de casos<br />
          <strong>clínicos do mundo</strong>
        </span>

        <p>Atuamos em diversos segmentos.</p>

        <SegmentsBox /> {/* Componentes dos segmentos */}        
      </div>
    </div>
  );
}