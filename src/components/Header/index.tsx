import { useEffect, useState } from 'react';
import {
  BrazilFlag,
  ChevronDownIcon,
  Logo,
  TrialIcon
} from '../../../public/icons/Icons';
import { Button } from '../Button';

import styles from './styles.module.scss';

export function Header() {
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

  return (
    <header
      className={
        stickyClass
          ? `${styles.headerContainer} ${styles.stickyHeader}`
          : styles.headerContainer
      }
    >
      <div className={styles.headerContent}>
        <Logo /> {/* Lado esquerdo */}
        <div>
          <nav>
            <ul>
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#plataforma">A plataforma</a>
              </li>
              <li>
                <a href="#para-quem">Para quem</a>
              </li>
              <li>
                <a href="#casos">Casos</a>
              </li>
              <li>
                <a href="#fique-por-dentro">Fique por dentro</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>{' '}
          {/* Itens de navegação */}
          <div>
            <button type="button" className={styles.languageBtn}>
              <BrazilFlag />
              <span>PT-BR</span>
              <ChevronDownIcon />
            </button>

            <Button>
              <span>Experimente grátis</span>
              <TrialIcon />
            </Button>
          </div>{' '}
          {/* Botões de Idioma e Experimente grátis */}
        </div>{' '}
        {/* Lado direito */}
      </div>
    </header>
  );
}
