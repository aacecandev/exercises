import React from 'react'
import logo from './logo.svg';
import classes from './Loading.css';


export const Loading = (props) => {
  return (
    <div>
      <p>Searching for users</p>
      <img src={logo} className={classes.Loading} alt="logo" />
    </div>
  )
}

