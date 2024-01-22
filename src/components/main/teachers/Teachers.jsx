import Container from '@/components/Container/Container';
import styles from './Teachers.module.scss';

const Teachers = () => {
  return (
    <section id="teachers" className={styles.teachers}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title"> Наші вихователі</h2>
        </div>
      </Container>
    </section>
  );
};

export default Teachers;
