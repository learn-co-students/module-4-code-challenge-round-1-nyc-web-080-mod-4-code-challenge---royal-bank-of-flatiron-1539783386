import React from 'react'
import Transaction from "./Transaction"

const TransactionsList = (props) => {


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

        
          {props.transactions.map((transaction)=>{


              //check search term all cases
                if (transaction.description.includes(props.searchTerm) || transaction.category.toLowerCase().includes(props.searchTerm) || transaction.description.toLowerCase().includes(props.searchTerm) || transaction.category.includes(props.searchTerm) ){

                return(
                  <Transaction key={transaction.id} transaction={transaction}/>
                )
              }

          })
        }


      </tbody>
    </table>
  )
}

export default TransactionsList
