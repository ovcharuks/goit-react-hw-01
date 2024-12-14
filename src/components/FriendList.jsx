import FriendListItem from './FriendListItem.jsx'
import friends from '/src/assets/friends.json'

const FriendList = () => {
    return (
<ul>
	
	{friends.map(friend => (
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
    )
}



export default FriendList