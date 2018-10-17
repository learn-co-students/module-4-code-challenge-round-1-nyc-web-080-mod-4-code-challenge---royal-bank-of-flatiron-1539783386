import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const trans = props.transactions.map((tran) => {
      return <Transaction key={tran.id} data={tran} />
    })


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
        {trans}




      </tbody>
    </table>
  )
}

export default TransactionsList
