import React from "react"
import styles from './Modal.module.css'
import { InputProps } from './InputProps'


const InputElement = (props : InputProps) => {
    return <>
        <div className={styles.inputItem}>
            <span className={styles.inputTitle}>{props.title}</span>
            <input className={styles.inputField} placeholder={props.placeholder}/>
        </div>
    </>
}

export default InputElement