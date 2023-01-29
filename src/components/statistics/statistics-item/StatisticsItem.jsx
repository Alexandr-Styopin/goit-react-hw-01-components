export default function StatisticsItem(statItem) {
  return (
    <li className="item">
      <span className="label">{statItem.label}</span>
      <span className="percentage">{statItem.percentage}%</span>
    </li>
  );
}
