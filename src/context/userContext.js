import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  //default value is only used when there is no matching provider
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    // value is a mandatory arg we need to pass while using provides, by these key only all the chlid
    //props will access these values
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
