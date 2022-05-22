/* eslint-disable */
import React from 'react';
import styles from './FormInput.module.scss'

const LabelledInput = (props) => {
  return <div className={styles.layout} {...props}>
          <label htmlFor={props.id} className={styles.label}>{props.label}</label>
          <input type={props.type} value={props.value} className={styles.input} id={props.id} onChange={props.onChange} />
        </div>
}

export default LabelledInput;