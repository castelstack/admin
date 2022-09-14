import StatBox from 'components/StatBox';
import { stats } from 'constants/stats';
import styles from 'styles/pages/dashboard.module.scss';
import Orders from './Orders';

const DashboardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        {stats.map((stats, i) => (
          <StatBox key={i} title={stats.title} figure={stats.amount} />
        ))}
      </div>
      <Orders/>
    </div>
  );
};

export default DashboardContainer;
