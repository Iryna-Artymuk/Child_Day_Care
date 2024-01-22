import Container from '@/components/Container/Container';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Logo from '@/components/logo/Logo';
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
      <Container>
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
      </Container>
      {/* <img src={header_bottom} alt="" /> */}
    </header>
  );
};

export default Header;
