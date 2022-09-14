import { navlinks } from 'constants/navLinks';
import { NavLink } from 'react-router-dom';
import styles from 'styles/components/sidebar.module.scss';

const SideBar = () => {

  return (
    <div className={styles.sidebar}>
      <button>GENERATE INVOICE</button>

      {navlinks.map((link, i) => (
        <div className={styles.sidebar_nav} key={i}>
          <h2>{link.title}</h2>
          <div className={styles.sidebar_navlinks}>
            {link.links.map((link, i) => (
              <NavLink
                key={i}
                to={link.route}
                className={({ isActive }) =>
                  isActive ? styles.sidebar_linksActive : styles.sidebar_links
                }
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
