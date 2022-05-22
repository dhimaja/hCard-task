
import React from "react";
import styles from './Button.module.scss'

const Button = (props) => {
  const {children, ...rest} = props;
  return (
    <button {...rest} className={
      props.color === 'blue' ? styles['blue-button'] : styles['gray-button'] 
    }>{children}</button>
  )
}

export default Button;