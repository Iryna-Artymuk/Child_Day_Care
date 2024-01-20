import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CardStyle = {
  borderRadius: '12px',
  border: '4px solid #FFC909',
  background: '#710A85',
  width: '305px',
  height: '422px',
  cursor: ' pointer',
};
const Card = ({ childInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        // className={styles.contentWrapper}
        onMouseEnter={() => setIsFlipped(!isFlipped)}
        // onMouseLeave={() => setIsFlipped(!isFlipped)}
      >
        <div>
          <img src={childInfo.photo} width={200} height={200} alt="" />
          <p>{childInfo.name}</p>
          <p>{childInfo.DOB}</p>
          <p>{childInfo.hobby}</p>
        </div>
      </div>

      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped(!isFlipped)}
        onMouseLeave={() => setIsFlipped(!isFlipped)}
        className="CardBack"
      >
        <img src={childInfo.photo} alt="" />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
