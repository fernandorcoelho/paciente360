import { NextPage } from 'next';
import Image from 'next/image';
import { HeroSection } from '../components/Home/HeroSection';
import { PlatformSection } from '../components/Home/PlatformSection';
import { SegmentsSection } from '../components/Home/SegmentsSection';
import { TryoutSection } from '../components/Home/TryoutSection';
import { ContinentsSection } from '../components/Home/ContinentsSection';
import deniseImg from '../../public/images/denise.png';
import deniseImgEn from '../../public/images/denise-en.png';
import deniseImgEs from '../../public/images/denise-es.png';
import deniseMobileImg from '../../public/images/denise-mobile.jpg';
import deniseMobileImgEn from '../../public/images/denise-mobile-en.png';
import deniseMobileImgEs from '../../public/images/denise-mobile-es.png';

import styles from './home.module.scss';
import { DifferentialsSection } from '../components/Home/DifferentialsSection';
import { ContactSpecialistSection } from '../components/Home/ContactSpecialistSection';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';
import MetaTags from 'components/MetaTags/MetaTags';

const Home: NextPage = () => {
  const { width } = useWindowDimensions();
  const { i18n } = useTranslation();

  const handleBackgroundImageSrc = () => {
    if (width > 768) {
      switch (i18n.language) {
        case 'pt-BR':
          return deniseImg;
        case 'en':
          return deniseImgEn;
        case 'es':
          return deniseImgEs;
        default:
          return;
      }
    } else {
      switch (i18n.language) {
        case 'pt-BR':
          return deniseMobileImg;
        case 'en':
          return deniseMobileImgEn;
        case 'es':
          return deniseMobileImgEs;
        default:
          return;
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Home | Paciente 360"
        description="A única plataforma de simulação de casos clínicos com pessoas reais no mundo.
        Utilizamos o ambiente digital para oferecer uma ferramenta que amplia o acesso à educação em saúde, de forma prática, interativa e de forma humanizada, com interações da experiência real."
        image="/public/images/hero-mobile.png"
      />

      <div className={styles.imageContainer}>
        <Image
          src={handleBackgroundImageSrc()}
          objectFit="cover"
          alt="Foto de Denise com diagnóstico"
        />
      </div>

      <HeroSection />
      <PlatformSection />
      <SegmentsSection />
      <TryoutSection />
      <ContinentsSection />
      <DifferentialsSection />
      <ContactSpecialistSection />
    </>
  );
};

export default Home;
