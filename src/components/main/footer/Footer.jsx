import Container from '@/components/ui/Container/Container';
import Logo from '@/components/ui/logo/Logo';

import styles from './Footer.module.scss';
import Navigation from '../../ui/nav/Navigation';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_contentWrapper}>
          <Logo />

          <address className={styles.address}>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.google.com/maps/search/%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%BD%D1%96%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D1%81%D0%BC%D1%82+%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B1%D0%B0%D0%B9,+%D0%B2%D1%83%D0%BB.%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0+155/@49.6076705,32.149085,17z?entry=ttu"
            >
              Наша адреса: <br />
              <p>
                Черкаська область, <br />
                Золотоніський район,
                <br />
                смт Чорнобай, <br />
                вул.Центральна 155
              </p>
            </a>
          </address>
          <Navigation footer={true} />
        </div>
        <a
          className={styles.developer}
          target="blank"
          href="https://www.linkedin.com/in/iryna-artymuk-269890264/"
        >
          Developed by Iryna Artymuk
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
