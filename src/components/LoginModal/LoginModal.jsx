// import React from 'react';
import Modal from "../Modal";
import LoginForm from "../../pages/LoginForm"

function LoginModal({ handleDismiss }) {
  return (
    <Modal title="Login Form" handleDismiss={handleDismiss}>
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;
