import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status, id }) => {
  return (
    <div className={styles.friendContainer}>
      <img src={avatar} alt={name} width="48" />
      <h4>{name}</h4>
      <p className={status ? styles.statusOnline : styles.statusIsOffline}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
