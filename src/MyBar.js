import React from 'react'
import './MyBar.css'

const MyBar = () => {
  return (
    <ul>
        <li><a className="active" href="/">My App</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
    </ul>
  )
}

export default MyBar