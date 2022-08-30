import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function BannerHome() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{t('home.hero.heading')}</h1>
        </div>
        <div>
          <p>{t('home.hero.description.text1')}</p>
          <p>{t('home.hero.description.text2')}</p>
          <p>{t('home.hero.description.text3')}</p>
        </div>
      </div>
      <Link href="https://conteudo.paciente360.com.br/lp_b2c">
        <button style={{ position: 'relative', left: '17px' }}>
          {t('button.signUp')}
        </button>
      </Link>
    </div>
  );
}
