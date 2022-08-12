import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Title(props) {
  return (
    <div className="title">
      <h3>{props.title}</h3>
    </div>
  )
}

export default Title