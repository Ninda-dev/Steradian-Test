import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GoogleLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // environment variable for the Google Client ID
          callback: async (response) => {
            console.log("Encoded JWT ID token: " + response.credential);
            const { data } = await axios.post(
              "https://api.mrkiwe.site/auth/google",
              {
                googleToken: response.credential,
              }
            );

            console.log(data);
            localStorage.setItem("access_token", data.access_token);
            navigate("/");
          },
        });

        // Render the Google Sign-In button
        google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
          theme: "outline",
          size: "large",
        });

        // Prompt the One Tap dialog
        google.accounts.id.prompt();
      }
    };

    initializeGoogleSignIn();
  }, [navigate]);

  return <div id="buttonDiv"></div>;
}

export default GoogleLogin;
