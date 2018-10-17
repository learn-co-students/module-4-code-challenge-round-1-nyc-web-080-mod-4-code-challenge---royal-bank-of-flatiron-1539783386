import React from 'react'

const Transaction = (props) => {
  // Deliverable #1 - Step #6 - log props to verify they were passed down
  // console.log(props);

  // Deliverable #1 - Step #7 - display the appropriate information
  return (
    <tr>
      <td>{props.posted_at}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction
