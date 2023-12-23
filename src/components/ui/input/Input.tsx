import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ type, placeholder, ...rest }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export function TextArea({ ...rest }: TextAreaProps) {
  return <textarea className={styles.input} {...rest} />;
}
