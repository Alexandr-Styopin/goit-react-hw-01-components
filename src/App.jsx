import ProfileCard from './components/soc-profile/profileCard';
import user from './user.json';

export default function App() {
  return (
    <div>
      <ProfileCard
        key={user.username}
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
