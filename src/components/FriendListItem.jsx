import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={styles.friendContainer}>
      <img src={avatar} alt={name} width="48" />
      <h4>{name}</h4>
      <p className={isOnline ? styles.statusOnline : styles.statusIsOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
