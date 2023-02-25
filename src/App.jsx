import PropTypes from 'prop-types';
import ProfileCard from 'components/soc-profile/ProfileCard';
import Statistics from './components/statistics/Statistics-section/Statistics';
import FriendList from './components/friend/friend-list/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';
//PACH>>>>>>>>>>>
import user from 'pach/to/user.json';
import data from 'pach/to/data.json';
import friends from './pach/to/friends.json';
import transactions from './pach/to/transactions.json';
//CSS>>>>>>>>>>>>
import css from './components/common/commonStyle.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.taskItem}>
        <h1 className={css.taskTitle}>1 - Профиль социальной сети</h1>
        <div className={css.task}>
          <ProfileCard
            key={user.username}
            name={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </div>
      </div>
      <div className={css.taskItem}>
        <h1 className={css.taskTitle}>2- Секция статистики</h1>
        <div className={css.task}></div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={css.taskItem}>
        <h1 className={css.taskTitle}>3 - Список друзей</h1>
        <div className={css.task}>
          <FriendList friends={friends} />
        </div>
      </div>
      <div className={css.taskItem}>
        <h1 className={css.taskTitle}>4 - История транзакций</h1>
        <div className={css.task}>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
