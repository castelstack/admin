import { SideBar } from 'containers/SideBar';
import SideBarMobile from 'containers/SideBar/SideBarMobile';
import styles from 'styles/components/layout.module.scss';

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <SideBar />
      <SideBarMobile />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default PageLayout;
