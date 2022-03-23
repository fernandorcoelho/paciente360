import Head from "next/head";
import { HeroSection } from "../components/Home/HeroSection";
import { PlatformSection } from "../components/Home/PlatformSection";
import { SegmentsSection } from "../components/Home/SegmentsSection";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Paciente 360º</title>
      </Head>

      <HeroSection />
      <PlatformSection />
      <SegmentsSection />
    </>
  );
}
