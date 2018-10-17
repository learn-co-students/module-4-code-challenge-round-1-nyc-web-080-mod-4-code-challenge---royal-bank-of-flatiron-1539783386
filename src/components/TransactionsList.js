import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  //console.log("translist props:", props);
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

        {props.showInfo.map(trans => {
          return <Transaction trans={trans} />
        })
        }
        {props.showInfo2.map(trans => {
          return <Transaction trans={trans} />
        })
        }

      </tbody>
    </table>
  )
}

export default TransactionsList
