import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ children, type, onClick, burgerButton }) => {
  return (
    <button
      className={clsx(styles.button, burgerButton && styles.burgerButton)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
