import Container from '@/components/ui/Container/Container';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Logo from '@/components/ui/logo/Logo';
import Navigation from '@/components/main/header/nav/Navigation';

import BurgerMenu from '@/components/burgerMenu/BurgerMenu';

import styles from './Header.module.scss';

import clsx from 'clsx';
const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  return (
    <header className={styles.header}>
      <div className={styles.header_contentWrapper}>
        <Logo />
        {!isDesktop ? (
          <button
            className={clsx(
              styles.burgerButton,
              showBurgerMenu && styles.closeBurgerMenu
            )}
            onClick={toggleBurgerMenu}
          >
            <div />
            <div />
            <div />
          </button>
        ) : (
          <Navigation toggleBurgerMenu={toggleBurgerMenu} />
        )}
        <BurgerMenu
          toggleBurgerMenu={toggleBurgerMenu}
          showBurgerMenu={showBurgerMenu}
        />
      </div>
    </header>
  );
};

export default Header;
