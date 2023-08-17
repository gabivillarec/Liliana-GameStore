import { auth , provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { URL } from "../../main";
import { useNavigate } from "react-router-dom";
import { userPost } from "./userPort";
import { useState } from "react";

const InicioGoogle = () =>{
  const [ userGoogle , setUserGoogle] = useState({})
  const navigate = useNavigate()

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
  
      setUserGoogle(user);
  
      // Realiza el trabajo adicional aquí con el usuario actualizado
      let objetPost = userPost(user);
      console.log(objetPost);
      await axios.post(`${URL}user`, objetPost)
        .then(response => {
          localStorage.setItem("user", JSON.stringify({ username: response.data.username, admin: response.data.admin, id: response.data.id }));
          navigate("/");
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  




  
 /*  const loginWithGoogle =async () => {
  await signInWithPopup(auth, provider)
      .then((result) => {
        // Este bloque se ejecuta cuando la autenticación es exitosa
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        setUserGoogle(user)
        // Puedes hacer lo que necesites con la información del usuario
      })
      .catch((error) => {
        // Este bloque se ejecuta si hay un error durante la autenticación
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email; // Asegúrate de verificar si customData está presente
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  
  const handlerGoogle= async() =>{
    try {
      await loginWithGoogle()
      console.log(userGoogle)
      let objetPost = userPost(userGoogle)
      console.log(objetPost)
      await axios.post(`${URL}login`, objetPost)
            .then(response => {
                // Manejo de la respuesta exitosa
                localStorage.setItem("user", JSON.stringify({ username : response.data.username, admin : response.data.admin, id : response.data.id }) )
                navigate("/")
              })  
            } catch (error) {
              console.log(error.message)
            }
  }
 */
  return(
    <div>
      <button onClick={loginWithGoogle}  className="btn btn-dark"><i class="bi bi-google"></i></button>
    </div>
  )
}

export default InicioGoogle