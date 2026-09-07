import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

type HeaderNavItem = "explore" | "categories";

interface HeaderProps {
  activeItem?: HeaderNavItem;
}

const navItems: { label: string; href: string; value: HeaderNavItem }[] = [
  { label: "Explore", href: "/", value: "explore" },
  { label: "Categories", href: "/categories", value: "categories" },
];

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UploadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 10.6667V2.66667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66667 6L8 2.66667L11.3333 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66667 10.6667V12.6667C2.66667 13.403 3.26362 14 4 14H12C12.7364 14 13.3333 13.403 13.3333 12.6667V10.6667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = ({ activeItem = "explore" }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="RealmWorks home">
        <Image
          src="/icons/logo-cube.svg"
          alt=""
          width={36}
          height={32}
          priority
          className={styles.logoIcon}
        />
        <span className={styles.logoText}>RealmWorks</span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.value}
            href={item.href}
            className={`${styles.navLink} ${
              activeItem === item.value ? styles.navLinkActive : ""
            }`}
            aria-current={activeItem === item.value ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          className={styles.searchButton}
          type="button"
          aria-label="Search"
        >
          <SearchIcon />
        </button>

        <Link href="/upload" className={styles.uploadButton}>
          <UploadIcon />
          <span>Upload Build</span>
        </Link>

        <div
          className={styles.profileAvatar}
          role="img"
          aria-label="User profile"
        />
      </div>
    </header>
  );
};

export default Header;
