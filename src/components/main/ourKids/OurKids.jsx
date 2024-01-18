import Container from '@/components/Container/Container';
import default_boy from '@/assets/images/default/default_boy.webp';
import default_girl from '@/assets/images/default/default_girl.webp';

import styles from './OurKids.module.scss';
const OurKids = () => {
  return (
    <section id="ourKids" className={styles.ourKids}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className="title">Наші діти</h2>
          <ul className={styles.kidsList}>
            <li>
              <img src={default_boy} alt="" width={200} />
            </li>
            <li>
              <img src={default_girl} alt="" width={200} />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default OurKids;
