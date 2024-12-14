

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return(
    <div >
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
  <p>
    {isOnline ? "Online" : "Offline"}
 </p>
</div>
)
}

export default FriendListItem