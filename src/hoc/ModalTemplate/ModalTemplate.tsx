import React from "react"
import Input from './Input'
import { InputProps } from './InputProps'
import { Button } from 'react-bootstrap';
import styles from './Modal.module.css'

interface ModalData {
    title : string,
    description?: string,
    btnTitle: string
    inputsData: InputProps[]
}

const createModal = (modalData: ModalData) => {
    const newModal = () => {
        return <div className={styles.modalContainer}>
            { modalData.title ? <h1>{modalData.title}</h1> : null }
            { modalData.description ? <p>{modalData.description}</p> : null }
            { modalData.inputsData.map(inputProps => <Input {...inputProps} /> ) }
            { modalData.btnTitle ? <Button>{modalData.btnTitle}</Button> : null}
        </div> 
    }
    return newModal
}

export default createModal