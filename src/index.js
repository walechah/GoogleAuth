import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainComponent() {
  useEffect(() => {
    const isInInstagramApp = window.navigator.userAgent.includes("Instagram");
    if (isInInstagramApp) {
      document.addEventListener("DOMContentLoaded", function() {
        const links = document.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
          links[i].addEventListener("click", function(event) {
            event.preventDefault();
            window.open(links[i].href, "_system");
          });
        }
      });
    }
  }, []);

  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="583195687810-5lg9ojgu42jkqnhjt93dkdv3mvknoquj.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

root.render(<MainComponent />);

reportWebVitals();
