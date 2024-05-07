import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import CredentialViewer from "./CredentialViewer";
import "./GoogleLoginButton.css"; 

function App() {
  const [decodedCredential, setDecodedCredential] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    setDecodedCredential(decoded);
    setIsLoggedIn(true);
  };

  const handleError = (error) => {
    console.log("Login Failed", error);
    setError("Login failed. Please try again.");
  };

  return (
    <div className="center">
      {!isLoggedIn && (
        <>
          {error && <p className="error-message">{error}</p>}
          <button className="google-login-button">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </button>
        </>
      )}
      {isLoggedIn && <CredentialViewer decodedCredential={decodedCredential} />}
    </div>
  );
}
export default App;
