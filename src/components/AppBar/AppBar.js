import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <nav className={styles.menu}>
        <NavLink
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLink_active}
          to={routes.home}
        >
          Home
        </NavLink>

        <NavLink
          className={styles.NavLink}
          activeClassName={styles.NavLink_active}
          to={routes.movies}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;