import axios from "axios";
import { setStorage } from "../rehydrate";

export const createNewUser = (name, email, password) => {
  return axios
    .post("http://localhost:3001/users", {
      name,
      email,
      password,
    })
    .then(function (response) {
      if (response.status === 201) {
        console.log(response);
        setStorage(response.data.token);
        return {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
        };
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const checkSignin = (email, password) => {
  return axios
    .post("http://localhost:3001/users/login", {
      email,
      password,
    })
    .then(function (response) {
      if (response.status === 200) {
        console.log("login", response.data.token);
        setStorage(response.data.token);
        return {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
        };
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getProfile = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .get("http://localhost:3001/users/me", config)
    .then(function (response) {
      console.log("fetching profile results:", response);
      if (response.status === 200) {
        return {
          name: response.data.name,
          email: response.data.email,
          token,
        };
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const checkLogout = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .post("http://localhost:3001/users/logout", {}, config)
    .then(function (response) {
      if (response.status === 200) {
        setStorage();
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editAccount = (name, email, password, oldPassword, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .patch(
      "http://localhost:3001/users/me",
      {
        name,
        email,
        password,
        oldPassword,
      },
      config
    )
    .then(function (response) {
      if (response.status === 200) {
        console.log(response);
        return {
          name: response.data.name,
          email: response.data.email,
        };
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
