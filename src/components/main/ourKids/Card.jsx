import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import styles from './OurKids.module.scss';
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
        onMouseEnter={() => setIsFlipped(!isFlipped)}
        onMouseLeave={() => setIsFlipped(!isFlipped)}
      >
        <img src={childInfo.photo} alt="" />
        <div className={styles.info}>
          <p>{childInfo.name}</p>
          <p>{childInfo.DOB}</p>
          <p>{childInfo.hobby}</p>
        </div>
      </div>

      <div
        style={CardStyle}
        onClick={() => setIsFlipped(!isFlipped)}
        className={styles.cardBack}
        onMouseEnter={() => setIsFlipped(!isFlipped)}
        onMouseLeave={() => setIsFlipped(!isFlipped)}
      >
        <img src={childInfo.photo} alt="" />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
