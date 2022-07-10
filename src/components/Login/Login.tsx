import React from "react"

import createModal from "../../hoc/ModalTemplate/ModalTemplate"

const Login = createModal({
    title: 'Login-form',
    btnTitle: 'sign in',
    inputsData: [ { title: 'login', placeholder: 'login'}, { title: 'password', placeholder: 'password'} ]
})

export default Login