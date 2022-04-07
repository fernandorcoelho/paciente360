import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TrialIcon } from '../../../public/icons/Icons';
import { Button } from '../Button';
import logoImg from '../../../public/images/logo.png';
import Link from 'next/link';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { SideMenu } from './SideMenu';
import { BurgerMenu } from './BurgerMenu';
import { LanguagesButton } from './LanguagesButton';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

type NavItemsProps = {
  id: number;
  text: string;
  link: string;
};

export function Header() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 70 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const navItemsArr: NavItemsProps[] = [
    {
      id: 0,
      text: t('solutions'),
      link: '#solucoes'
    },
    {
      id: 1,
      text: t('thePlatform'),
      link: '#plataforma'
    },
    {
      id: 2,
      text: t('forWhom'),
      link: '#para-quem'
    },
    {
      id: 3,
      text: t('cases'),
      link: '#denise'
    },
    {
      id: 4,
      text: t('stayIn'),
      link: '#fique-por-dentro'
    },
    {
      id: 5,
      text: t('contact'),
      link: 'https://conteudo.paciente360.com.br/contato'
    }
  ];

  return (
    <>
      <header
        className={
          stickyClass
            ? `${styles.headerContainer} ${styles.stickyHeader}`
            : styles.headerContainer
        }
      >
        <div className={styles.headerContent}>
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo"
              objectFit="contain"
              className={styles.logo}
              // height={60}
              width={width > 768 ? 120 : 90}
            />
          </Link>
          {/* Lado esquerdo */}
          <div className={styles.navItems}>
            <nav>
              <ul>
                {navItemsArr.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <li>
                      <p>{item.text}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            {/* Itens de navegação */}
            <div>
              <LanguagesButton />

              <a href="https://app.paciente360.com.br/login">
                <Button>
                  <span>{t('accessPlatform')}</span>
                  <TrialIcon />
                </Button>
              </a>
            </div>
            {/* Botões de Idioma e Experimente grátis */}
          </div>
          {/* Lado direito */}
        </div>

        <div className={styles.burgerMenu}></div>
      </header>

      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItemsArr}
      />
    </>
  );
}
