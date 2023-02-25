import css from '../statistics-item/StatisticsItem.module.css';
import RandomColor from '../RandomColor';

export default function StatisticsItem({ id, label, percentage }) {
  const color = RandomColor();
  return (
    <li className={css.item} style={{ backgroundColor: `${color}` }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}
