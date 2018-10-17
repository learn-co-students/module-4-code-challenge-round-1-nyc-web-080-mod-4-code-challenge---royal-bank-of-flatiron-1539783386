import React from 'react'
import Transaction from './Transaction'

// Deliverable #1 - Step #4 - verify props were passed correctly
const TransactionsList = (props) => {
// console.log(props.transactions);
console.log(props.searchInput);

// Deliverable #1 - Step #5 - Map through transactions & pass them down as props to each Transaction
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

        {props.transactions.map(transaction => {
          if(props.searchInput == ''){
            return (
              <Transaction
                key={transaction.id}
                posted_at={transaction.posted_at}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            )
          }
          else if(transaction.category.includes(props.searchInput) || transaction.description.includes(props.searchInput)){
            return (
              <Transaction
                key={transaction.id}
                posted_at={transaction.posted_at}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            )
          }
        })}
            </tbody>
    </table>

  )
}

export default TransactionsList
