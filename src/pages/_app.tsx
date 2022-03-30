import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // Início: Animação de opacidade ao carregar a página
  const appVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
  };

  function App() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={appVariants}
      >
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </motion.div>
    );
  }
  // Fim: Animação de opacidade ao carregar a página

  return <App />;
}

export default MyApp;
