import React from "react";

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";

import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

const auth = getAuth(firebaseApp);

const Home = (user) => {
  return (
    <div>
      Home
      <button onClick={() =>signOut(auth)}>Cerrar sesion</button>
      {user.rol === 'admin' ? <AdminView/> : <UserView/> }
    </div>
  );
};

export default Home;
