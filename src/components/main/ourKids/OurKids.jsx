import Container from '@/components/Container/Container';
import styles from './OurKids.module.scss';
const OurKids = () => {
  return (
    <section id="ourKids" className={styles.ourKids}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className="title">Наші діти</h2>
        </div>
      </Container>
    </section>
  );
};

export default OurKids;
