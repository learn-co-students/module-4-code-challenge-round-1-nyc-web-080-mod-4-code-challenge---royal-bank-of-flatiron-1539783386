import React from 'react';
import Transaction from './Transaction'

const TransactionsList = ({searchInput, allTransactions, filterTransaction}) => {

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

        {searchInput === "" ? allTransactions.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} id={transaction.id}/>
        }) : filterTransaction.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} id={transaction.id}/>
        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
