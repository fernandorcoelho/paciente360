import { Button } from 'components/Button';
import Link from 'next/link';
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
          <Button>
            <span>Acessar plataforma</span>
            <TrialIcon />
          </Button>
        </ul>
      </nav>
    </div>
  );
};
