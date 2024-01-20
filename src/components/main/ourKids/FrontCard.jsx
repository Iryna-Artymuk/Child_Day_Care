import styles from './OurKids.module.scss';

const FrontCard = ({ childInfo, handleClick }) => {
  return (
    <div className={styles.contentWrapper} onClick={handleClick}>
      <div>
        <img src={childInfo.photo} width={200} height={200} alt="" />
        <p>{childInfo.name}</p>
        <p>{childInfo.DOB}</p>
        <p>{childInfo.hobby}</p>
      </div>
    </div>
  );
};

export default FrontCard;
