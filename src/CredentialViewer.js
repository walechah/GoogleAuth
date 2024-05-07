import React from "react";
import "./CredentialViewer.css";

function CredentialViewer({ decodedCredential }) {
  let link = decodedCredential.picture;

  const handleLoginAgain = () => {
    window.location.reload();
  };

  return (
    <div className="center">
      <div className="card-container">
        <div className="card custom-card">
          <img src={link} className="card-img-top custom-img" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">
              Name: {decodedCredential.given_name} {decodedCredential.family_name}
            </h5>
            <p className="card-text">Email: {decodedCredential.email}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Email Verified: {decodedCredential.email_verified ? "True" : "False"}
            </li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={handleLoginAgain}>
          Login Again
        </button>
      </div>
    </div>
  );
}

export default CredentialViewer;
