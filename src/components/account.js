import React, { useState } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import Register from "../components/register";
import Login from "../components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/account.css";

// Account component definition
function Account() {
  // State to manage the visibility of the register modal
  const [showRegister, setShowRegister] = useState(false);

  // State to manage the visibility of the login modal
  const [showLogin, setShowLogin] = useState(false);

  // State to manage the username
  const [username, setUsername] = useState("Demo");

  // State to manage the logged-in status
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to close the register modal
  const closeRegisterModal = () => setShowRegister(false);

  // Function to show the register modal
  const showRegisterModal = () => setShowRegister(true);

  // Function to close the login modal
  const closeLoginModal = () => setShowLogin(false);

  // Function to show the login modal
  const showLoginModal = () => setShowLogin(true);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };

  // Render the Account component
  return (
    <div className="App">
      {/* Account Button with Dropdown */}
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
            // Show "Logged in" text if user is logged in
            <Dropdown.Item disabled>Logged in</Dropdown.Item>
          ) : (
            // Show "Register" and "Login" options if user is not logged in
            <>
              <Dropdown.Item onClick={showRegisterModal}>
                Register
              </Dropdown.Item>
              <Dropdown.Item onClick={showLoginModal}>Login</Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={closeRegisterModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
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
