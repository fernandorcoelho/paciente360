import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
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
      text: 'Termos de uso',
      link: '#'
    },
    {
      id: 1,
      text: 'Políticas de privacidade',
      link: '#'
    },
    {
      id: 2,
      text: 'Política de reembolso',
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
      text: 'Soluções',
      link: '#solucoes'
    },
    {
      id: 2,
      text: 'A Plataforma',
      link: '#plataforma'
    },
    {
      id: 3,
      text: 'Para quem',
      link: '#para-quem'
    },
    {
      id: 4,
      text: 'Casos',
      link: '#casos'
    },
    {
      id: 5,
      text: 'Fique por dentro',
      link: '#fique-por-dentro'
    }
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topContainer}>
        <div className={styles.a}>
          <Image src={whiteLogoImg} alt="Logo branca" />
          <p>
            O Paciente 360® é uma tecnologia 100% brasileira que inovou a
            educação ao propor a simulação de casos clínicos virtuais
            humanizados para ensinar conceitos e orientar decisões que fazem
            parte da rotina de médicos e outros profissionais da área da saúde.
          </p>
        </div>
        {/* Logo + Descrição do projeto */}

        <nav className={styles.b}>
          <strong>Siga nossas redes sociais</strong>
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
          <strong>Privacidade & Termos</strong>
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
          <strong>Navegue</strong>
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
      <Link href="#hero">
        <button type="button" className={styles.btn}>
          <CircleArrowUpIcon />
          <p>Voltar ao topo</p>
        </button>
      </Link>
      {/* Parte de cima do footer */}

      <div className={styles.bottomContainer}>
        <p>Paciente 360 • 2022 Todos os direitos reservados</p>
        {width > 768 && (
          <Link href="#hero">
            <button type="button" className={styles.btn}>
              <CircleArrowUpIcon />
              <p>Voltar ao topo</p>
            </button>
          </Link>
        )}
        <div>
          <AbedIcon />
          {width > 768 && (
            <div>
              <p>Desenvolvido por:</p>
              <FastersIcon />
            </div>
          )}
        </div>
      </div>
      {/* Parte de baixo do footer */}
    </footer>
  );
};
