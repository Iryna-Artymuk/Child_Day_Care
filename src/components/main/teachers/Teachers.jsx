import Container from '@/components/Container/Container';
import styles from './Teachers.module.scss';
import img1 from '@/assets/images/teachers/img1.png';
import img2 from '@/assets/images/teachers/img2.png';
import img3 from '@/assets/images/teachers/img3.png';
const Teachers = () => {
  return (
    <section id="teachers" className={styles.teachers}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title"> Наші вихователі</h2>
          <div>
            <ul className={styles.teachersList}>
              <li className={styles.teachersListItem}>
                <div className={styles.info}>
                  <img src={img1} alt="" />
                  <p>Світлана Миколаївна</p>
                </div>
              </li>
              <li className={styles.teachersListItem}>
                <div className={styles.info}>
                  <img src={img2} alt="" />
                  <p>Ірина Григорівна </p>
                </div>
              </li>
              <li className={styles.teachersListItem}>
                <div className={styles.info}>
                  <img src={img3} alt="" />
                  <p>Наталія Миколаівна</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Teachers;
