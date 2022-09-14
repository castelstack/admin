import styles from 'styles/pages/dashboard.module.scss';
import chart from 'assets/chart.png';
import { ChartBox } from './chart';

const StatBox = ({ title = 'stat name', figure = '23445' }) => {
  return (
    <main className={styles.statBox}>
      <div className={styles.statBox_info}>
        <p>{title}</p>
        <h3>{figure}</h3>
      </div>
      {/* <img src={chart} alt='logo' className={styles.statBox_chart} /> */}
      <ChartBox/>
    </main>
  );
};

export default StatBox;
