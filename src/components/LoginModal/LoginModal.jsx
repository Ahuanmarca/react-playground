// import React from 'react';
import Modal from "../Modal";
import LoginForm from "../../pages/LoginForm"

function LoginModal({ dismissMe }) {
  return (
    <Modal title="Login Form" dismissMe={dismissMe}>
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;