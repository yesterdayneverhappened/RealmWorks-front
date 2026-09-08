import type { InputHTMLAttributes } from "react";
import styles from "./SearchInput.module.scss";

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 15.75L12.4875 12.4875"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchInput = ({ className = "", ...props }: SearchInputProps) => {
  return (
    <label className={`${styles.wrapper} ${className}`}>
      <SearchIcon />
      <input className={styles.input} type="search" {...props} />
    </label>
  );
};

export default SearchInput;
