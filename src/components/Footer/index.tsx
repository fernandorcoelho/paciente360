import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AbedIcon,
  CircleArrowUpIcon,
  FacebookIcon,
  FastersIcon,
  InstagramIcon,
  LinkedinIcon
} from '../../../public/icons/Icons';
import whiteLogoImg from '../../../public/images/white-logo.png';

import styles from './styles.module.scss';

type NavProps = {
  id: number;
  text: string;
  link: string;
};

interface SocialMediaArr extends NavProps {
  icon: ReactNode;
}

export const Footer = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const socialMediaArr: SocialMediaArr[] = [
    {
      id: 0,
      icon: <LinkedinIcon />,
      text: 'Paciente360',
      link: '#'
    },
    {
      id: 1,
      icon: <FacebookIcon />,
      text: 'Paciente360',
      link: '#'
    },
    {
      id: 2,
      icon: <InstagramIcon />,
      text: 'Paciente360',
      link: '#'
    }
  ];

  const termsAndPolicyArr: NavProps[] = [
    {
      id: 0,
      text: t('terms'),
      link: '#'
    },
    {
      id: 1,
      text: t('privacyPolicies'),
      link: '#'
    },
    {
      id: 2,
      text: t('refundPolicy'),
      link: '#'
    }
  ];

  const navigationArr: NavProps[] = [
    {
      id: 0,
      text: 'Home',
      link: '#hero'
    },
    {
      id: 1,
      text: t('solutions'),
      link: '#solucoes'
    },
    {
      id: 2,
      text: t('thePlatform'),
      link: '#plataforma'
    },
    {
      id: 3,
      text: t('forWhom'),
      link: '#para-quem'
    },
    {
      id: 4,
      text: t('cases'),
      link: '#casos'
    },
    {
      id: 5,
      text: t('stayIn'),
      link: '#fique-por-dentro'
    }
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topContainer}>
        <div className={styles.a}>
          <Image src={whiteLogoImg} alt="Logo branca" />
          <p>{t('footerText')}</p>
        </div>
        {/* Logo + Descrição do projeto */}

        <nav className={styles.b}>
          <strong>{t('followUs')}</strong>
          <ul>
            {socialMediaArr.map((item) => (
              <Link key={item.id} href={item.link}>
                <li>
                  {item.icon}
                  <p>{item.text}</p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Social Media */}

        <nav className={styles.c}>
          <strong>{t('privacyTerms')}</strong>
          <ul>
            {termsAndPolicyArr.map((item) => (
              <Link key={item.id} href={item.link}>
                <li>
                  <p>{item.text}</p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Termos & Políticas */}

        <nav className={styles.d}>
          <strong>{t('browse')}</strong>
          <ul>
            {navigationArr.map((item) => (
              <Link key={item.id} href={item.link}>
                <li>
                  <p>{item.text}</p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Navegação */}
      </div>
      {width !== 0 && width <= 768 && (
        <Link href="#hero">
          <button type="button" className={styles.btn}>
            <CircleArrowUpIcon />
            <p>{t('backToTop')}</p>
          </button>
        </Link>
      )}
      {/* Parte de cima do footer */}

      <div className={styles.bottomContainer}>
        <p>Paciente 360 • 2022 Todos os direitos reservados</p>
        {width > 768 && (
          <Link href="#hero">
            <button type="button" className={styles.btn}>
              <CircleArrowUpIcon />
              <p>{t('backToTop')}</p>
            </button>
          </Link>
        )}
        <div>
          <AbedIcon />
          {width > 768 && (
            <div>
              <p>{t('developedBy')}</p>
              <FastersIcon />
            </div>
          )}
        </div>
      </div>
      {/* Parte de baixo do footer */}
    </footer>
  );
};
