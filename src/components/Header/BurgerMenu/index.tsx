import styles from './styles.module.scss';

type BurgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }: BurgerMenuProps) => {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`${styles.container} ${isMenuOpen && styles.close}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
