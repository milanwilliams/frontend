import React, { Component } from 'react'

/* Import Components */
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Button from '../../components/Button'
import Posts from '../../components/Posts'
import gql from 'graphql-tag'
import { Query, graphql } from 'react-apollo'

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      nickname
      email
      house
    }
  }
`
const UserInfo = ({ userId }) => (
  <Query query={GET_USER} variables={{ id: userId }}>
    // render prop function - note the arguments
    {({ loading, error, data }) => (
      <React.Fragment>
        <div>Nickname: ${data.user.nickname}</div>
        <div>House: ${data.user.house}</div>
        <div># of followers</div>
        <Posts />
      </React.Fragment>
    )}
  </Query>
)

class MyProfile extends Component {
  render() {
    return <UserInfo userId={} />
  }
}

export default MyProfile
