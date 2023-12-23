import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button className={styles.btn} disabled={loading} {...rest}>
      {loading ? <FaSpinner color="#fff" size={16} /> : <a>{children}</a>}
    </button>
  );
}
