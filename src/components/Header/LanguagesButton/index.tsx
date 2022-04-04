import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
  BRFlag,
  USFlag,
  ESFlag,
  ChevronDownIcon
} from '../../../../public/icons/Icons';

import styles from './styles.module.scss';

export const LanguagesButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<'pt' | 'en' | 'es'>('pt');

  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef);

  const Flag = () => {
    if (selected === 'pt') {
      return <BRFlag />;
    } else if (selected === 'en') {
      return <USFlag />;
    } else {
      return <ESFlag />;
    }
  };

  function useOutsideClick(ref: MutableRefObject<any>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        type="button"
        className={styles.languagesBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag />
        <span>{selected.toUpperCase()}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button type="button" onClick={() => setSelected('pt')}>
            <BRFlag />
            <span>PT-BR</span>
          </button>
          <button type="button" onClick={() => setSelected('en')}>
            <USFlag />
            <span>EN-US</span>
          </button>
          <button type="button" onClick={() => setSelected('es')}>
            <ESFlag />
            <span>ES-ES</span>
          </button>
        </div>
      )}
    </div>
  );
};
