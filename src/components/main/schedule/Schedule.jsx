import Container from '@/components/Container/Container';
import styles from './Schedule.module.scss';
import { schedule } from '@/constants/data/schedule';
import sprite from '@/assets/icons/sprite.svg';
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
            <svg className={styles.icon1} width={50} height={50}>
              <use href={`${sprite}#${'icon-book'}`} />
            </svg>
            <svg className={styles.icon2} width={50} height={50}>
              <use href={`${sprite}#${'icon-pen'}`} />
            </svg>
            <h2 className="title">Наш розклад</h2>
            <div className={styles.schedule}>
              {schedule.map((day, index) => (
                <div key={index} className={styles.scheduleCard}>
                  <h3>{day.day} </h3>
                  <ul className={styles.scheduleList}>
                    <li className={styles.scheduleListItem}>
                      <svg width={20} height={20}>
                        <use href={`${sprite}#${'icon-clock'}`} />
                      </svg>
                      <p>{day.time}</p>
                    </li>
                    <li className={styles.scheduleListItem}>
                      <svg width={20} height={20}>
                        <use href={`${sprite}#${'icon-books'}`} />
                      </svg>
                      <p>{day.event1} </p>
                    </li>
                    <li className={styles.scheduleListItem}>
                      <svg width={20} height={20}>
                        <use href={`${sprite}#${'icon-books'}`} />
                      </svg>
                      <p>{day.event2} </p>
                    </li>
                  </ul>
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
