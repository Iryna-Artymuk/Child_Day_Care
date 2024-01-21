import Container from '@/components/Container/Container';
import styles from './Schedule.module.scss';
import { schedule } from '@/constants/data/schedule';
const Schedule = () => {
  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.shapeTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <Container>
        <div className="contentWrapper">
          <div className={styles.innerWrapper}>
            <h2 className="title">Наш розклад</h2>
            <div className={styles.schedule}>
              {schedule.map((day, index) => (
                <div key={index} className={styles.scheduleCard}>
                  <h3>{day.day} </h3>
                  <p>{day.time} </p>
                  <p>{day.event} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.shapeBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Schedule;
