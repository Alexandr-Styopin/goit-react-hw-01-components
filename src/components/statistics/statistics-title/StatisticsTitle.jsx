import css from '../statistics-title/StatisticsTitle.module.css';
export default function StatisticsTitle({ title }) {
  return <h2 className={css.title}>{title}</h2>;
}
