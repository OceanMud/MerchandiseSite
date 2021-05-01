import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import UserContext from "./components/UserContext";
import { rehydrate } from "./components/rehydrate";

import AppRouter from "./components/routers/AppRouter";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";

axios.defaults.withCredentials = true;

const Context = () => {
  const [userInfo, setUserInfo] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [transition, setTransition] = useState("-translate-x-96");

  useEffect(() => {
    loadAccount();
  }, []);

  const loadAccount = () => {
    const results = async () => await rehydrate();

    results()
      .then((result) => {
        setUserInfo(result);
        setLoading(true);
      })
      .catch((e) => {
        console.log(e);
        setLoading(true);
      });
  };

  return (
    <React.StrictMode>
      <UserContext.Provider
        value={{
          userInfo,
          setUserInfo,
          oldPassword,
          setOldPassword,
          sideMenu,
          setSideMenu,
          transition,
          setTransition,
        }}
      >
        {!loading ? undefined : <AppRouter />}
      </UserContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Context />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
