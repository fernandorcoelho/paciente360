import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  AppleLogo,
  CirclesDownload,
  MicrosoftLogo
} from '../../../../public/icons/Icons';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import macbookImg from '../../../../public/images/macbook-2.png';

import styles from './styles.module.scss';
import Link from 'next/link';
import { Button } from 'components/Button';

export const DownloadSection = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <section className={styles.downloadSectionContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={macbookImg}
          objectFit="contain"
          layout="intrinsic"
          width={width > 1800 && 1000}
          className={styles.img}
        />
        <CirclesDownload />
      </div>
      <div className={styles.downloadSection}>
        <div>
          <span>
            {t('downloadHead1')}
            <strong>{t('downloadHead2')}</strong> {t('downloadHead3')}
          </span>
        </div>

        <div>
          <a href="/">
            <Button variant="download">
              <AppleLogo />
              <span>
                Download on the <br />
                <strong>App Store</strong>
              </span>
            </Button>
          </a>
          <a href="/">
            <Button variant="download">
              <MicrosoftLogo />
              <span>
                Get it from <br />
                <strong>Microsoft</strong>
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
