import styles from './styles.module.scss';

type SideMenuProps = {
  isMenuOpen: boolean;
};

export const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
  return (
    <div className={`${styles.container} ${isMenuOpen && styles.active}`}></div>
  );
};
