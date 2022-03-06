import React from "react";

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Home = () => {
  return (
    <div>
      Home
      <button onClick={() =>signOut(auth)}>Cerrar sesion</button>
    </div>
  );
};

export default Home;
