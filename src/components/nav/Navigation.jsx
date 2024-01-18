import { HashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';

const Navigation = ({ toggleBurgerMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList} onClick={() => toggleBurgerMenu()}>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
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
                block: 'end',
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
                block: 'end',
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
                block: 'end',
              })
            }
            to="/#weStudy"
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
                block: 'end',
              })
            }
            to="/#ourTeachers"
          >
            Наші вихователі
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
