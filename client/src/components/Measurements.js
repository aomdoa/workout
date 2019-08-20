import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const MEASUREMENT_QUERY = gql`
  {
    getMeasurements {
      id
      name
      description
      unit
    }
  }
`

class Measurements extends Component {
  render() {
    return(
      <div>
        <div>Measurements</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit</th>
                <th>Description</th>
              </tr>
            </thead>
            <Query query={MEASUREMENT_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <tbody><tr><td>Fetching</td></tr></tbody>
                if (error)   return <tbody><tr><td>Error</td></tr></tbody>
                return (
                  <tbody>
                    {data.getMeasurements.map(m => <tr key={m.id}><td>{m.name}</td><td>{m.unit}</td><td>{m.description}</td></tr>)}
                  </tbody>
                )
             }}
             </Query>
          </table>
        </div>
      </div>
    )
  }
}

export default Measurements
