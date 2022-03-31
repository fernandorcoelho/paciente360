import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  BrazilFlag,
  ChevronDownIcon,
  TrialIcon
} from '../../../public/icons/Icons';
import { Button } from '../Button';
import logoImg from '../../../public/images/logo.png';
import Link from 'next/link';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

import styles from './styles.module.scss';
import { SideMenu } from './SideMenu';
import { BurgerMenu } from './BurgerMenu';

type NavItemsProps = {
  id: number;
  text: string;
  link: string;
};

export function Header() {
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
      text: 'Soluções',
      link: '#solucoes'
    },
    {
      id: 1,
      text: 'A plataforma',
      link: '#plataforma'
    },
    {
      id: 2,
      text: 'Para quem',
      link: '#para-quem'
    },
    {
      id: 3,
      text: 'Casos',
      link: '#casos'
    },
    {
      id: 4,
      text: 'Fique por dentro',
      link: '#fique-por-dentro'
    },
    {
      id: 5,
      text: 'Contato',
      link: '#contato'
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
          <Image
            src={logoImg}
            alt="Logo"
            objectFit="contain"
            // height={60}
            width={width > 425 ? 120 : 90}
          />
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
              <button type="button" className={styles.languageBtn}>
                <BrazilFlag />
                <span>PT</span>
                <ChevronDownIcon />
              </button>

              <Button>
                <span>Acessar plataforma</span>
                <TrialIcon />
              </Button>
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
