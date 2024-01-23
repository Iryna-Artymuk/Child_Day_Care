import Container from '../../ui/Container/Container';
import styles from './Hero.module.scss';

import bear2_hero from '@/assets/images/hero/bear2_hero.png';
import paw_patrol from '@/assets/images/hero/paw_patrol.png';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.contentWrapper}>
          <div>
            <h1 className={styles.heroTitlte}>
              Чорнобаївський заклад дошкільної освіти &quot;Вишенька&quot;
              <br />2 молодша група &quot;Малинка&quot;
            </h1>
          </div>
          {!isDesktop && (
            <img src={paw_patrol} width={365} height={245} alt="" />
          )}

          {isDesktop && (
            <>
              {/* <img  src={img1_hero} alt="" /> */}
              {/* <img src={img2_hero} alt="" /> */}
              <img className={styles.heroImages1} src={bear2_hero} alt="" />
              <img
                className={styles.heroImages2}
                src={paw_patrol}
                width={365}
                height={245}
                alt=""
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
<img src={paw_patrol} width={365} height={245} alt="" />;
export default Hero;
