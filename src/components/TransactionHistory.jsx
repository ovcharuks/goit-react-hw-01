
const TransactionHistory = ({items}) => {
return (
    <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  {items.map(item => (
  
    <tbody>
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  </tbody>

  ))}
</table>
)
}

export default TransactionHistory;