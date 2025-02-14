import FriendListItem from "./FriendListItem.jsx";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          {console.log(friend.isOnline)}
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
