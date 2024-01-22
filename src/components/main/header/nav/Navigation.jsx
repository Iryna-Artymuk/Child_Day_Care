import { HashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';
import { useMediaQuery } from 'react-responsive';

const Navigation = ({ toggleBurgerMenu }) => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  return (
    <nav className={styles.nav}>
      <ul
        className={styles.navList}
        onClick={() => {
          if (!isDesktop) toggleBurgerMenu();
        }}
      >
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            to="/#ourKids"
          >
            Наші діти
          </HashLink>
        </li>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            to="/#gallery"
          >
            Галерея
          </HashLink>
        </li>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            to="/#schedule"
          >
            Наш розклад
          </HashLink>
        </li>
        <li>
          {' '}
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            to="/#study"
          >
            Ми вивчаємо
          </HashLink>
        </li>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            to="/#teachers"
          >
            Наші вихователі
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
