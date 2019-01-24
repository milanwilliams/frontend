import React from 'react'
import { Container } from './styles'

const TextArea = props => (
  <Container>
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  </Container>
)

export default TextArea
