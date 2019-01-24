import ApolloClient from 'apollo-boost'
import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Register from './containers/Register'
import Login from './containers/Login'
import { ApolloProvider } from 'react-apollo'
//import Newsfeed from './containers/Newsfeed'
import MyProfile from './containers/MyProfile'
import OtherProfile from './containers/OtherProfile'
import Home from './containers/Home'
import config from './config.js'

//creates new client:
const client = new ApolloClient({
  uri: config.graphqlUrl,
})

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route path="/login" component={Login} />
              {/* <Route path="/newsfeed" component={Newsfeed} /> */}
              <Route exact path="/myprofile" component={MyProfile} />
              <Route exact path="/otherprofile" component={OtherProfile} />
              <Route exact path="/" component={Home} />
            </Switch>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
