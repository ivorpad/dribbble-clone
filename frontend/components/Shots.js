import React, { Component } from 'react'
import styled from 'styled-components'
import gql  from 'graphql-tag'
import { Query } from 'react-apollo'

export const ALL_SHOTS_QUERY = gql`
  query ALL_SHOTS_QUERY {
    shots {
      title
      description
      image
      likes
    }
  }
`;

const ShotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

export class Shots extends Component {
  render() {
    return (
      <Query query={ALL_SHOTS_QUERY}>
        { ({data, loading, error}) => {
          
          if(error) return <p>An error occurred...</p>
          if(loading) return <p>Loading...</p>

          return (
            <ShotsGrid>
              {
                data.shots.map((shot, index) => {
                  return (
                    <div className="shot">
                      <h3>{shot.title}</h3>
                      <img src={shot.image} alt={shot.title} width="260"/>
                      <p>{shot.description}</p>
                    </div>
                  )
                })
              }
            </ShotsGrid>
          )
        }}
      </Query>
    )
  }
}

export default Shots
