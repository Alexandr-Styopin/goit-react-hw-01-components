export default function ProfileCard({ avatar, name, tag, location, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" width="100px" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{stats.followers}</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">{stats.views}</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">{stats.likes}</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}