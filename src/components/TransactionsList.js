import React from 'react'

const TransactionsList = (props) => {

  // Function to render transactions from prop transaction
  const renderTransactions = () => {
    return props.transactions.map(transaction => {
      return (
        <tr key={transaction.id}>
          <th>
            <h3 className="ui center aligned">
              {transaction.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned">
              {transaction.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned">
              {transaction.category}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned">
              {transaction.amount}
            </h3>
          </th>
        </tr>
      )
    })
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {renderTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
