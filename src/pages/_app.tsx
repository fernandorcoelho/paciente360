import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../i18n/index';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
