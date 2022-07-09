import React from "react"
import createModal from "../hoc/ModalTemplate/ModalTemplate"

const Registration = createModal({
    title: 'Registration-form',
    btnTitle: 'sign up',
    inputsData: [ 
        { title: 'email', placeholder: 'email' },
        { title: 'login', placeholder: 'login' },
        { title: 'name', placeholder: 'name' },
        { title: 'lastname', placeholder: 'lastname' },
        { title: 'password', placeholder: 'password'}, 
        { title: 'repeat password', placeholder: 'repeat password'}
    ]
})

export default Registration