import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import styles from './OurKids.module.scss';
import clsx from 'clsx';
const CardStyle = {
  borderRadius: '12px',
  border: '4px solid #FFC909',
  background: '#710A85',
  width: '305px',
  height: '422px',
  cursor: 'pointer',
  padding: '0px',
};
const Card = ({ childInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        className={styles.cardFront}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <img
          src={childInfo.photoFront}
          width="297px"
          height="250px"
          alt={`${childInfo.name} фото`}
          loading="lazy"
        />
        <div className={styles.info}>
          <p className={styles.name}>{childInfo.name}</p>
          <p>{childInfo.DOB}</p>
          <p className={clsx(styles.hobby, isFlipped && styles.flipped)}>
            {childInfo.hobby}
          </p>
        </div>
      </div>

      <div
        style={CardStyle}
        onClick={() => setIsFlipped(!isFlipped)}
        className={styles.cardBack}
      >
        <img
          src={childInfo.photoBack}
          alt={`${childInfo.name} фото`}
          loading="lazy"
        />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
