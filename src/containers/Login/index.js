import React, { Component } from 'react'

/* Import Components */
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Button from '../../components/Button'
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        nickname: '',
        password: '',
      },
    }

    this.handleNickname = this.handleNickname.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleNickname(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser.nickname),
    )
  }

  handlePassword(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser),
    )
  }

  // // I AM CONFUSHION

  handleInput(e) {
    let value = e.target.value
    let name = e.target.name
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        },
      }),
      () => console.log(this.state.newUser),
    )
  }

  handleFormSubmit(e) {
    e.preventDefault()
    let userData = this.state.newUser

    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      response.json().then(data => {
        console.log('Successful' + data)
      })
    })
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        {/* Insert nickname */}
        <Input
          inputType={'text'}
          title={'Nickname'}
          name={'nickname'}
          value={this.state.newUser.nickname}
          placeholder={'Enter your anonymous nickname'}
          handleChange={this.handleInput}
        />{' '}
        {/* Insert password */}
        <Input
          inputType={'text'}
          title={'Password'}
          name={'password'}
          value={this.state.newUser.password}
          placeholder={'Enter your password'}
          handleChange={this.handleInput}
        />{' '}
        {/* Submit info */}
        <Link to="/myprofile">
          <Button
            action={this.handleFormSubmit}
            type={'primary'}
            title={'Submit'}
            style={buttonStyle}
          />
        </Link>{' '}
      </form>
    )
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
}

export default Login
