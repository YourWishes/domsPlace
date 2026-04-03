import HeaderButton from './HeaderButton';
import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__brand']}>
      
      </div>
      <nav className={styles['header__nav']}>
        {['Home', 'Features', 'Work', 'Contact'].map((item) => (
          <HeaderButton
            key={item}
          >
            {item}
          </HeaderButton>
        ))}
      </nav>
    </header>
  );
}