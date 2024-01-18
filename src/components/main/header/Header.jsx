import Container from '@/components/Container/Container';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Logo from '@/components/logo/Logo';
import Navigation from '@/components/nav/Navigation';

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
        <div className={styles.contentWrapper}>
          <Logo />
          {!isDesktop ? (
            // <Button type="button" burgerButton onClick={toggleBurgerMenu}>
            //   <svg width={50} height={50}>
            //     <use href={`${sprite}#${'burger_menu'}`} />
            //   </svg>
            // </Button>
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
            <Navigation />
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
