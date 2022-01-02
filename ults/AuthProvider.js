import React, { createContext, useState, useEffect } from "react";
// import app from "./base";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   app.auth().onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  // }, []);

  return (
    <AuthContext.Provider value={{ currentUser, show: "This is from State" }}>
      {children}
    </AuthContext.Provider>
  );
};
