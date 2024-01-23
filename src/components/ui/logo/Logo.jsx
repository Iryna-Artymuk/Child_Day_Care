import { Link } from 'react-router-dom';
import sprite from '@/assets/icons/sprite.svg';
const Logo = () => {
  return (
    <Link to="/" title='логотип '>
      <div>
        <svg width={50} height={50}>
          <use href={`${sprite}#${'logo'}`} />
        </svg>
    
      </div>
    </Link>
  );
};

export default Logo;
