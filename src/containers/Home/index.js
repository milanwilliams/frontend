import React, { Component } from 'react'
import Button from '../../components/Button'
import { GlobalStyle, Header, Header2, buttonStyle } from './styles'
import theme from '../../theme'
import { Link } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>CRIMSON CONFESSIONS</Header>
        <Header2>Anonymously Share Your College Confessions </Header2>
        <Link to="/login">
          <Button
            // action={this.handleFormSubmit}
            type={'primary'}
            title={'Log In'}
            // style={buttonStyle}
          />
        </Link>
        <Link to="/register">
          <Button
            // action={this.handleFormSubmit}
            type={'primary'}
            title={'Sign Up'}
            // style={buttonStyle}
          />
        </Link>{' '}
      </React.Fragment>
    )
  }
}

export default Home
