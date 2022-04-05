import { Button } from 'components/Button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { TrialIcon } from '../../../../public/icons/Icons';

import styles from './styles.module.scss';

type NavItemsProps = {
  id: number;
  text: string;
  link: string;
};

type SideMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItemsProps[];
};

export const SideMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  navItems
}: SideMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${isMenuOpen && styles.active}`}>
      <nav>
        <ul>
          {navItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <li onClick={() => setIsMenuOpen(false)}>
                <p className={isMenuOpen && styles.active}>{item.text}</p>
              </li>
            </Link>
          ))}
          <a href="https://app.paciente360.com.br/login">
            <Button>
              <span>{t('accessPlatform')}</span>
              <TrialIcon />
            </Button>
          </a>
        </ul>
      </nav>
    </div>
  );
};
