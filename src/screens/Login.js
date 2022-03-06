import React, { useState } from "react";

function Login() {
  const [isRegistrado, setIsRegistrado] = useState(false);


  function submitHandler(e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email,password,rol);
  }

  return (
    <div>
      <h1>{isRegistrado ? "Registrate" : "Inicia sesion"}</h1>
      <form onSubmit={ submitHandler}>
        <label>
          Correo electronico:
          <input type="email" id="email"/>
        </label>

        <label>
          Contrasena:
          <input type="password" id ="password"/>
        </label>

        <label>
          Rol:
          <select id = "rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>

        <input
        type="submit"
        value={isRegistrado ? "Registrar" : "Iniciar sesion"}
        />
      </form>
      <button onClick={()=> setIsRegistrado(!isRegistrado)}>
        {isRegistrado ? "Ya tengo una cuenta" : "Quiero registrarme"}
        </button>
    </div>
  );
}

export default Login;
