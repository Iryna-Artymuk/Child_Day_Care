import styles from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};

export default Card;
