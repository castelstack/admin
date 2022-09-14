import { SideBar } from 'containers/SideBar';
import styles from 'styles/components/layout.module.scss';

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <SideBar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default PageLayout;
