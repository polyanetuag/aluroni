import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './MenuBoard.module.scss';

export default function MenuBoard() {
  return (
    <nav className={styles.menu}>
          <Logo />
        </nav>
  );
}