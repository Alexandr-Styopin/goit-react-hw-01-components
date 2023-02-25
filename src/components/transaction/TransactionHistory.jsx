import css from '../transaction/TransactionHistory.module.css';
import TransactionItem from '../transaction/transaction-item/TransactionItem';
export default function TransactionHistory({ items }) {
  // items.map(console.log(item));
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}
