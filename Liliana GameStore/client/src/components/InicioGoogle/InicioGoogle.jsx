import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { URL } from "../../main";
import { useNavigate } from "react-router-dom";
import { userPost } from "./userPort";
import { useState } from "react";

const InicioGoogle = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
      // Realiza el trabajo adicional aquí con el usuario actualizado
      let objetPost = userPost(user);
      let emailEstado = await axios.get(`${URL}user/email/${objetPost.email}`);
      if (!emailEstado.data) {
          await axios.post(`${URL}user`, objetPost)
          .then(response => {
            localStorage.setItem("user", JSON.stringify({ username: response.data.username, admin: response.data.admin, id: response.data.id }));
            navigate("/");
          })
          .catch(error => {
            console.log(error.message);
          });
      } else {
        let userData = { username: user.displayName, password: user.accessToken}
        try {
          let response = await axios.post(`${URL}login`, userData);
          localStorage.setItem("user", JSON.stringify({ username: response.data.username, admin: response.data.admin, id: response.data.id }));
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error.message)
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle} className="btn btn-dark">
        <i className="bi bi-google"></i>
      </button>
    </div>
  );
};

export default InicioGoogle;
