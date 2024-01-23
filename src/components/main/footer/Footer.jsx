import Container from '@/components/Container/Container';
import Logo from '@/components/logo/Logo';

import styles from './Footer.module.scss';
import Navigation from '../header/nav/Navigation';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_contentWrapper}>
          <Logo />

          <address className={styles.address}>
            Наша адреса: <br />
            <p>
              Черкаська область, <br />
              Золотоніський район,
              <br />
              смт Чорнобай, <br />
              вул.Центральна 155
            </p>
          </address>
          <Navigation footer={true} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
