import React, { useState } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Register from "../components/register";
import Login from "../components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/account.css";
import { registerUser } from "../redux/actions";

// Account component definition
function Account() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const closeRegisterModal = () => setShowRegister(false);
  const showRegisterModal = () => setShowRegister(true);
  const closeLoginModal = () => setShowLogin(false);
  const showLoginModal = () => setShowLogin(true);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegisterComplete = (username, password) => {
    dispatch(registerUser({ username, password }));
    alert("Register Complete!");
    closeRegisterModal();
  };

  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Toggle className="account-button" id="dropdown-account">
          <img
            src="assets/account.png"
            alt="account"
            className="account-icon"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {loggedIn ? (
            <Dropdown.Item disabled>Logged in</Dropdown.Item>
          ) : (
            <>
              <Dropdown.Item onClick={showRegisterModal}>
                Register
              </Dropdown.Item>
              <Dropdown.Item onClick={showLoginModal}>Login</Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={showRegister} onHide={closeRegisterModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register onRegisterComplete={handleRegisterComplete} />
        </Modal.Body>
      </Modal>

      <Modal show={showLogin} onHide={closeLoginModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            storedUsername={username}
            onLoginSuccess={handleLoginSuccess}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Account;
