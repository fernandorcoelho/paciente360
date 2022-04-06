import { useRouter } from 'next/router';
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  BRFlag,
  USFlag,
  ESFlag,
  ChevronDownIcon
} from '../../../../public/icons/Icons';

import styles from './styles.module.scss';

type ILanguageOptions = {
  name: 'PT' | 'EN' | 'ES';
  fullName: 'PT-BR' | 'EN-US' | 'ES-ES';
  value: 'pt-BR' | 'en' | 'es';
  flag: ReactNode;
};

export const LanguagesButton = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<ILanguageOptions>();
  // Estado da língua selecionada
  console.log(i18n.language);

  const languageOptions: ILanguageOptions[] = [
    {
      name: 'PT',
      fullName: 'PT-BR',
      value: 'pt-BR',
      flag: <BRFlag />
    },
    {
      name: 'EN',
      fullName: 'EN-US',
      value: 'en',
      flag: <USFlag />
    },
    {
      name: 'ES',
      fullName: 'ES-ES',
      value: 'es',
      flag: <ESFlag />
    }
  ];
  // Listagem de opções de idiomas

  useEffect(() => {
    switch (i18n.language) {
      case 'pt-BR':
        return setSelectedOption(languageOptions[0]);
      case 'en':
        return setSelectedOption(languageOptions[1]);
      case 'es':
        return setSelectedOption(languageOptions[2]);
      default:
        break;
    }
  }, [i18n.language]);
  // Seta o idioma selecionado de acordo com o i18n

  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef);

  function useOutsideClick(ref: MutableRefObject<any>) {
    useEffect(() => {
      /**
       * Detecta o click fora do elemento
       */
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Adiciona o event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Remove o event listener e limpa
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  // Função para click fora do dropdown o fechar

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        type="button"
        className={styles.languagesBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.flag}
        <span>{selectedOption?.name}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languageOptions.map((item) => (
            <button
              type="button"
              onClick={() => {
                i18n.changeLanguage(item.value);
                setIsOpen(false);
                // router.replace('https://localhost:3000/' + i18n.language);
              }}
            >
              {item.flag}
              <span>{item.fullName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
