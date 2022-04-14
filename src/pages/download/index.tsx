import { NextPage } from 'next';
import MetaTags from 'components/MetaTags/MetaTags';
import { DownloadSection } from 'components/Download/DownloadSection';

const Download: NextPage = () => {
  return (
    <>
      <MetaTags
        title="Download | Paciente 360"
        description="A única plataforma de simulação de casos clínicos com pessoas reais no mundo.
        Utilizamos o ambiente digital para oferecer uma ferramenta que amplia o acesso à educação em saúde, de forma prática, interativa e de forma humanizada, com interações da experiência real."
        image="/public/images/hero-mobile.png"
      />

      <DownloadSection />
    </>
  );
};

export default Download;
