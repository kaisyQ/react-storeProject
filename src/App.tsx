import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createModal from './components/ModalTemplate/ModalTemplate';

const LoginModal = createModal({
  title: 'Login',
  description: 'this is login form',
  btnTitle: 'Submit',
  inputsData: [ { title: 'login', placeholder: 'login'}, { title: 'password', placeholder: 'password'} ]
})

function App() {
  return (
    <div className="App">
      <LoginModal />
    </div>
  );
}

export default App;
