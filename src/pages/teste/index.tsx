import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Teste: NextPage = () => {
  const { t } = useTranslation();

  return <h1>{t('teste')}</h1>;
};

export default Teste;
