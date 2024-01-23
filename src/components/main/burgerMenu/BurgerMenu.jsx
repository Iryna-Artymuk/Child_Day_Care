import clsx from 'clsx';

import styles from './BurgerMenu.module.scss';
import Navigation from '../header/nav/Navigation';

const BurgerMenu = ({ toggleBurgerMenu, showBurgerMenu }) => {
  return (
    <div
      className={clsx(
        styles.burgerMenuWrapper,
        showBurgerMenu ? '' : styles.hidden
      )}
    >
      <Navigation toggleBurgerMenu={toggleBurgerMenu} />
    </div>
  );
};

export default BurgerMenu;
