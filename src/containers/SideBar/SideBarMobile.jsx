import { navlinks } from 'constants/navLinks';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/components/sidebar.module.scss';

const SideBarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.sidebarmobile}>
      <div className={styles.bttn}
      
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        )}
      </div>

      <button className={open ? '' : styles.buttonhide}>
        GENERATE INVOICE
      </button>

      {navlinks.map((link, i) => (
        <div className={styles.sidebar_nav} key={i}>
          <h2>{link.title}</h2>
          <div className={styles.sidebar_navlinks}>
            {link.links.map((link, i) => (
              <NavLink
                key={i}
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? open
                      ? styles.sidebar_linksActive
                      : styles.linkshide
                    : open
                    ? styles.sidebar_links
                    : styles.linkshide
                }
              >
                {link.icon} <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBarMobile;
