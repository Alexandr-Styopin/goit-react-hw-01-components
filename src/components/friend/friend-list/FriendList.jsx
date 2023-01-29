import FriendItem from '../friend-item/FriendItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friendEl => (
        <FriendItem
          avatar={friendEl.avatar}
          name={friendEl.name}
          isOnline={friendEl.isOnline}
          id={friendEl.id}
          key={friendEl.id}
        />
      ))}
    </ul>
  );
}
