import React from 'react'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
//import { Container, Text } from './styles'

const Posts = () => (
  <React.Fragment>
    <div> Write your post below!</div>
    <TextArea />
    <Button
      // action={this.handleFormSubmit}
      type={'primary'}
      title={'Submit'}
      // style={buttonStyle}
    />{' '}
  </React.Fragment>
)
export default Posts
