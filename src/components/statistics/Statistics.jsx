import StatisticsTitle from './statistics-title/StatisticsTitle';
import StatisticsItem from './statistics-item/StatisticsItem';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <StatisticsTitle title={title} />
      <ul className="stat-list">
        {stats.map(statItem => (
          <StatisticsItem
            key={statItem.id}
            id={statItem.id}
            label={statItem.label}
            percentage={statItem.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
