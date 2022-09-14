import styles from 'styles/pages/dashboard.module.scss';
import OrdersChart, { OrderBox } from './OrdersChart';

const dataa = [
  {
    title: 'Orders',
    details: [
      {
        title: 'Pending Orders',
        amount: 20,
      },
      {
        title: 'Reconcilled Orders',
        amount: 20,
      },
      {
        title: 'Total Orders',
        amount: 100,
      },
    ],
  },
  {
    title: 'Orders',
    details: [
      {
        title: 'Pending Orders',
        amount: 20,
      },
      {
        title: 'Reconcilled Orders',
        amount: 20,
      },
      {
        title: 'Total Orders',
        amount: 100,
      },
    ],
  },
];

const Orders = () => {
  return (
    <div className={styles.orders}>
      <OrdersChart />
      <div className={styles.paymentcard}>
        {dataa.map((item, i) => (
          <OrderBox key={i} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
