import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const storedUserLoggedINInformation = localStorage.getItem('isLoggedIn');

  // if (storedUserLoggedINInformation === '1') {
  //   setIsLoggedIn(true);
  // }

  // This will check to see if localstorage is already logged in so that we don't have to refresh. However this will cause an infinite loop since setIsLoggedIn will retrigger the useState and it will be an onging thing. this is why we need useEffect.

  useEffect(() => {
    const storedUserLoggedINInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedINInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // because of useEffect we updat the state which triggers only once because our depencies change, the array after the funciton. We don't have an infinite loop since useEffect is only called once when the page initially renders.

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // localStorage.setItem('isLoggedIn', '1')
    // strings could be anything. We are storing data in local stoarge so that we can stay logged in after refresh

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    // this removes the localstorage so we can log out on refresh .

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
