import Container from '@/components/Container/Container';
import styles from './Study.module.scss';

const Study = () => {
  return (
    <section id="study" className={styles.study}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title"> Ми вивчаємо</h2>
        </div>
      </Container>
    </section>
  );
};

export default Study;
