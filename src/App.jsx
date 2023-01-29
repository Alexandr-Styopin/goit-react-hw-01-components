import ProfileCard from 'components/soc-profile/ProfileCard';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend/friend-list/FriendList';
import user from 'pach/to/user.json';
import data from 'pach/to/data.json';
import friends from './pach/to/friends.json';

console.log(friends);

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
