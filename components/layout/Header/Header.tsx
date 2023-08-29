import styles from './Header.module.css';
import Logo from '../../../public/logo.svg';
export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo.src} alt="logo" />
    </header>
  );
}