import { Link } from 'react-router-dom';
import styles from './Page404.module.scss';

const Page404 = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.wrapper}>
        <div className="image">
          <img src="/404.svg" alt="page 404" />
        </div>
        <p>
          Cпокійно, все підконтролем, просто такої сторінки покищо не існує !
        </p>
        <Link to={'/'}>
          <button>Повернутися на головну</button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
