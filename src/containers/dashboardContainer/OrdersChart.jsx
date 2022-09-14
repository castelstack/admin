import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

import styles from 'styles/pages/dashboard.module.scss';

const OrdersChart = ({ time = '5th, Aug 2019' }) => {
  return (
    <div className={styles.orderchart}>
      <div className={styles.orderchart_tab}>
        <h3>{time}</h3>
        <div className={styles.orderchart_tab_tabin}>
          <select name='month'>
            <option value='Jan1 - Jan 30'>Jan1 - Jan 30 </option>
          </select>
          <div className={styles.orderchart_buttons}>
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
      </div>
      <ChartBox />
    </div>
  );
};

export default OrdersChart;

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartBox = () => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#0294FF'
          fill='rgba(2, 148, 255, 0.126274)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const OrderBox = ({ info }) => {
  const { details } = info;
  return (
    <div className={styles.box}>
      <h4>{info.title}</h4>
      <div className={styles.range}>
        <div className={styles.rangebox} style={{ width: `${23}px` }}></div>
      </div>
      <div></div>
      {/* {info.details.map((detail, i) => ( */}
      <div className={styles.box_info}>
        <p>{details[0]?.title}:</p>
        <span className={styles.box_info__spanone}>{details[0]?.amount}</span>
      </div>
      <div className={styles.box_info}>
        <p>{details[1]?.title}:</p>
        <span className={styles.box_info__spantwo}>{details[1]?.amount}</span>
      </div>
      <div className={styles.box_info}>
        <p>{details[2]?.title}:</p>
        <span className={styles.box_info__spanthree}>{details[2]?.amount}</span>
      </div>
      {/* ))} */}
    </div>
  );
};
