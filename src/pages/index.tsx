import Head from 'next/head';
import Image from 'next/image';
import { HeroSection } from '../components/Home/HeroSection';
import { PlatformSection } from '../components/Home/PlatformSection';
import { SegmentsSection } from '../components/Home/SegmentsSection';
import { TryoutSection } from '../components/Home/TryoutSection';
import { ContinentsSection } from '../components/Home/ContinentsSection';
import deniseImg from '../../public/images/denise.png';

import styles from './home.module.scss';
import { DifferentialsSection } from '../components/Home/DifferentialsSection';
import { ContactSpecialistSection } from '../components/Home/ContactSpecialistSection';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <>
      <Head>
        <title>Home | Paciente 360º</title>
      </Head>

      <div className={styles.imageContainer}>
        <Image
          src={deniseImg}
          objectFit="cover"
          alt="Foto de Denise com diagnóstico"
        />
      </div>

      <HeroSection />
      <PlatformSection />
      <SegmentsSection />
      {/* <TryoutSection /> */}
      <ContinentsSection />
      <DifferentialsSection />
      <ContactSpecialistSection />
    </>
  );
}
