
import Container from '@/components/Container/Container';

import styles from './OurKids.module.scss';

import { kidsData } from '@/constants/data/kidsData';

import Card from './Card';
const OurKids = () => {

  return (
    <section id="ourKids" className={styles.ourKids}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className="title">Наші діти</h2>
          <ul className={styles.kidsList}>
            {kidsData.map(child => {
              return (
                <li key={child.name}>
                  <Card childInfo={child} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default OurKids;
