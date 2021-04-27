import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import UserContext from "./components/UserContext";
import AppRouter from "./components/routers/AppRouter";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";

axios.defaults.withCredentials = true;

const Context = () => {
  const [userInfo, setUserInfo] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [jsonToken, setJsonToken] = useState("");

  return (
    <React.StrictMode>
      <UserContext.Provider
        value={{
          userInfo,
          setUserInfo,
          oldPassword,
          setOldPassword,
          jsonToken,
          setJsonToken,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Context />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
