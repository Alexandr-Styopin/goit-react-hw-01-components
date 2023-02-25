import StatisticsTitle from '../statistics-title/StatisticsTitle';
import StatisticsItem from '../statistics-item/StatisticsItem';
import css from '../Statistics-section/Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title={title} />
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            id={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
}
