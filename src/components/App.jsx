import "./App.css";
import Profile from "/src/components/Profile.jsx";
import FriendList from "/src/components/FriendList.jsx";
import TransactionHistory from "./TransactionHistory.jsx";

import userData from "/src/assets/userData.json";
import friends from "/src/assets/friends.json";
import transactions from "/src/assets/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={`@${userData.tag}`}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      console.log(friends);
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
