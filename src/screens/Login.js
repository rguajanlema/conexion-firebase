import React, { useState } from "react";

import firebaseApp from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);


function Login() {

  const firestore = getFirestore(firebaseApp);
  
  const [isRegistrado, setIsRegistrado] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore,`usuarios/${infoUsuario.user.uid}`);
    //escritura en base de datos
    setDoc(docuRef, { correo: email, rol: rol});
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrado) {
      //registrar
      registrarUsuario(email, password, rol);
    } else {
      //login
    }
  }

  return (
    <div>
      <h1>{isRegistrado ? "Registrate" : "Inicia sesion"}</h1>
      <form onSubmit={submitHandler}>
        <label>
          Correo electronico:
          <input type="email" id="email" />
        </label>

        <label>
          Contrasena:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegistrado ? "Registrar" : "Iniciar sesion"}
        />
      </form>
      <button onClick={() => setIsRegistrado(!isRegistrado)}>
        {isRegistrado ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
    </div>
  );
}

export default Login;
